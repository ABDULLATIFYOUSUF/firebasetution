import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5QSA7cWU70AxhfX7w6Fj3dueDP-jLiVQ",
  authDomain: "fir-tution.firebaseapp.com",
  projectId: "fir-tution",
  storageBucket: "fir-tution.appspot.com",
  messagingSenderId: "951399808452",
  appId: "1:951399808452:web:3fb0acaf055da97100f891"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signupBtn = document.getElementById("signupBtn")
signupBtn.addEventListener("click", signup)

async function signup(){
    try {
        const fullName = document.getElementById("fullName").value
        const phoneNumber = document.getElementById("phoneNumber").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const type = document.getElementById("type").value

        const appUser = {
            fullName,
            phoneNumber,
            email,
            type,
            password
        }
        const result = await createUserWithEmailAndPassword(auth, appUser.email, appUser.password)  
        const uid = result.user.uid;
        try {
            const docRef = await addDoc(collection(db, "users"), {
              ...appUser,
              uid
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        alert("Successfully Signed Up")
        window.location.replace("/index.html")

    } catch (error) {
        console.log(error.message)  
    }
}

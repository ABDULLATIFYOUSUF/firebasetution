import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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

const loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", login)

async function login(){
    try {
        
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const result = await signInWithEmailAndPassword(auth, email, password)  
        const uid = result.user.uid;  
        alert("User Login Successfully")
        
        const q = query(collection(db, "users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const user1 = doc.data()
          
          if(uid === user1.uid && user1.type === "Vendor"){
            window.location.replace("/vendorDashboard.html")
          }else if(uid === user1.uid && user1.type === "Customer"){
            window.location.replace("/customerDashboard.html")
          }else if(uid === user1.uid && user1.type === "Admin"){
            window.location.replace("/dashboard.html")
          }
          
          
        })

        
        
        
    } catch (error) {
        console.log(error.message)  
    }
}

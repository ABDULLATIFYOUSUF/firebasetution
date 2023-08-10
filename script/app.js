import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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

const loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", login)

async function login(){
    try {
        
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const result = await signInWithEmailAndPassword(auth, email, password)  
        const uid = result.user.uid;
        const emailVerified = result.user.emailVerified
        if(emailVerified != "false"){
          alert("User Login Successfully")
        window.location.assign("/dashboad.html")
        }else(
          alert("verify your email first")
        )
        
    } catch (error) {
        console.log(error.message)  
    }
}

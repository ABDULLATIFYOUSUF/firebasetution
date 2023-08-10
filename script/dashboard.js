import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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


const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", logout)

JSON.parse(localStorage.getItem("user"))
const logo = document.getElementById("logo")

onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
      const display = user.email
      logo.innerHTML = display
     
    } else {
     console.log(error)
    }
  });
function logout(){
    try {
        localStorage.removeItem("user")
        signOut(auth)        
        window.location.replace("/index.html")
        alert("signout")
        
    } catch (error) {
        console.log(error.message)
    }
}
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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




const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", logout)

const logo = document.getElementById("logo")

const q = query(collection(db, "users"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const user1 = doc.data()
onAuthStateChanged(auth, (user) => {
  
    if (user) {
      const uid = user.uid;
      if(user.email === user1.email){
        const display = user1.fullName
      logo.innerHTML = display
      }
      
     
    } else {
     console.log(error)
    }
  });



        })
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

const addProduct = document.getElementById("addProduct")
addProduct.addEventListener("click", productSet)

async function productSet(){
  const productImage = document.getElementById("productImage").value
  const productName = document.getElementById("productName").value
  const productPrice = document.getElementById("productPrice").value  
  
}



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

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

const tableBody = document.getElementById("tableBody")

const logo = document.getElementById("logo")

const q = query(collection(db, "users"));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  const user1 = doc.data()
  console.log(user1)
  if(user1.type !== "Admin"){
    const list = `<tr>
    <td scope="col">${user1.fullName}</td>
    <td>${user1.phoneNumber}</td>
    <td>${user1.email}</td>
    <td>${user1.uid}</td>
</tr>`
tableBody.innerHTML += list


}
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
});







const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", logout)




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
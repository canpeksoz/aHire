import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref,  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
 




const firebaseConfig = {
  apiKey: "AIzaSyBExhGEGFVitugDVDoNYW2c4qeDyVQdqJQ",
  authDomain: "ahire-636cc.firebaseapp.com",
  databaseURL: "https://ahire-636cc-default-rtdb.firebaseio.com",
  projectId: "ahire-636cc",
  storageBucket: "ahire-636cc.appspot.com",
  messagingSenderId: "454483553062",
  appId: "1:454483553062:web:ccd511b854b9535adf2fe7",
  measurementId: "G-CM18EJXDBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);


submitdata.addEventListener('click',(e)=>{

    var email=document.getElementById('mail').value;
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
var typeSelect = document.getElementById('nameSelect').value;


//user create
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
set(ref(database,'users/'+user.uid),{

    username: username,
    mail: email,
    type: typeSelect

})
alert('Registration Successfully !')
//window.location.href = "/Login.html" 


// ...
})
  

.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

alert(errorMessage)
});




});
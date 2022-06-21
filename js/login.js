 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update, onValue, get,child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";


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


login.addEventListener('click',(e)=>{

    var email=document.getElementById('mail').value;
var password=document.getElementById('password').value;



//user create
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      let user = userCredential.user;
      let dt = new Date();


      update(ref(database, 'users/' + user.uid + '/profile'), {

        last_login: dt,
   
      })
      alert("Login Successfully");
  
      user = auth.currentUser;

      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/` + user.uid + '/profile')).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val().type);
          if (snapshot.val().type == 'Freelancer') {
            window.location.href = "freelancerAfterLoginHome.html";
          } else {
            window.location.href = "employerAfterLoginHome.html";
          }



        } else {
          console.log("No data available");
        }
    
      }).catch((error) => {
        console.error(error);
      });




    })


.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

  alert(errorMessage)
  



});





});
     resetPassword.addEventListener('click', (e) => {

  var email = document.getElementById('recoverPass').value;
  
    sendPasswordResetEmail(auth, email)
      .then(() => {


        alert("Password reset email sent! Check your inbox or spam box !")
 

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..

  });



});


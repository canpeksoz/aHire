import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

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
const user = userCredential.user;
const dt = new Date();


update(ref(database,'users/'+user.uid),{

    last_login: dt,
   
})
alert('Login Successfull !')
  //window.location.href = "/Login.html"


// ...
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
        console.log("SUCCESS")
        alert("SUCCESS")
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });



});






//function recoverPass() {
  //  $.ajax({
    //  type: 'POST',
   //   url: 'https://mandrillapp.com/api/1.0/messages/send.json',
   //  data: {
      //  'key': 'htTa0Kv0RPkKQJ8NvozAQQ',
      //  'message': {
      //    'from_email': 'omurkozdemir@gmail.com',
       //   'to': [
       //       {
       //         'email': email,
        //        'name': username,
        //        'type': 'to'
         //     }
         //   ],
        //  'autotext': 'true',
         // 'subject': 'Reset Your Password',
         // 'html': 'Follow Link to reset your password : '
      //  }
     // }
//}).done(function(response) {
      // console.log(response); // if you're into that sorta thing
    // });
//}
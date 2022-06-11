import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";



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
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);


  

//uuid
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}



// date field selectable days starting from today
document.addEventListener("DOMContentLoaded", function() {
    // code here


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").setAttribute("min", today);
    
    });


  

    onAuthStateChanged(auth,(user)=>{
    
      if(user){
      user = auth.currentUser;
console.log(user.uid)
      update.addEventListener('click',function writeUserData(username){
    
       let frefname = document.getElementById('frefname').value;
       let freage = document.getElementById('freage').value;
       let fredateOfBirth = document.getElementById('fredateOfBirth').value;
       

       set(ref(database, 'users/'+user.uid+'/profile'), {
           frefname:frefname,
           freage:freage,
           fredateOfBirth:fredateOfBirth
         });
       
     
       
   });





   }
// kullanıcı giriş yapmamış olduğundan içeri giremez
      else{
       var path = window.location.pathname;
       var page = path.split("/").pop();
      
       if(page!=="login.html" && page!=="register.html"){
         window.location.href = "login.html"; 
       }
      
      
   }

   })
    


    // create post
//updateuserinfo.js

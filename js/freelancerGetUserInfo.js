import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update, onValue, get,child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
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

// read data from firebase realtime database







// get user profile data from firebase
onAuthStateChanged(auth,(user)=>{
      
    if(user){
    user = auth.currentUser;
  
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`+user.uid+'/profile')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val().username);
        console.log(snapshot.val().frefname);
        console.log(snapshot.val().freage);
        
      // var row = "<tr> <td>" + snapshot.val().title + "</td></tr>"
        
      // $(row).appendTo('#dataTbl');
     
     
  
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
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
//freelancergetuserinfo.js
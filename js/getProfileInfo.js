import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update, onValue, get,child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth,  onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";



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
  const dbRef = ref(getDatabase());
var tmp=1;




  
function GetAll(tmp, count){
 
while(tmp<count){
  const Users = ref(database, 'users/'+tmp);

  onValue(Users, (snapshot) => {

  
    const data = snapshot.val();
    var row = "<tr> <td>" + "<a href='jobDetails.html'>" +  snapshot.val().Abilities + "</a>" + "</td>  </tr>" 
         
      $(row).appendTo('#ablTable');

    
 
  });

  tmp++;
 
  


}

  
 }
  tmp==0;
  
  const ar=[];
  //array.forEach(e => {
      
 // });
  // get jobs data from firebase
  let count;
  onAuthStateChanged(auth,(user)=>{
      
  if(user){
  user = auth.currentUser;
  get(child(dbRef, '/')).then((snapshot) => {
  
    if (snapshot.exists()) {
      count= Number(snapshot.val().JobCount);
      
      
  GetAll(tmp,count);
  
  
  
    } else {
      console.log("No jobcount data available");
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
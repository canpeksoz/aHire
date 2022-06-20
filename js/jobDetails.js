window.onload(localStorage.getItem("JobId"));

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update, onValue,get } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
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

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const updates = {};
 
 



   //buton içinde id hep en son count olarak dönüyor. Her buton aynı sayı dönüyor.
   

   




  window.onload = function(){

    onAuthStateChanged(auth,(user)=>{
    
               if(user){
               user = auth.currentUser;
               
    //user tipine göre apply buton göstermek için 
               const getType = ref(database, 'users/' + user.uid +"/profile");
               onValue(getType, (snapshot) => {
    //kullanıcının type'ını çekiyoruz
                 const data = snapshot.val().type;
         
                 const Jobs = ref(database, 'Jobs/'+localStorage.getItem("JobId"));

  onValue(Jobs, (snapshot) => {
   
  
    const data1 = snapshot.val();
        
    if(data=="Freelancer"){
 
     
  var row = "<tr> <td>" +  snapshot.val().title + "</td> <td>" + snapshot.val().category + "</td> <td>" + snapshot.val().date + "</td>  <td>" + snapshot.val().price + "</td> <td>" +
   "</td> <td>" +
   "<button type='button' class='btn btn-info' id='button'>APPLY JOB</button>"+ "</td></tr>" 
  $(row).appendTo('#jobs');

  var button = document.getElementById("button");



 
  button.addEventListener("click", function(event){
    
   
    const starCountRef = ref(database,'Jobs/'+localStorage.getItem("JobId"));
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val().applyCount;
      set(ref(database,'Jobs/'+ localStorage.getItem("JobId") +'/whoApplied/'+data),{
            
        user:user.uid,
        
    })
    });




/*
    const getApplycount = ref(database, 'Jobs/'+localStorage.getItem("JobId"));
  
    get(getApplycount, (snapshot) => {
      console.log("deneme");
        let data = Number(snapshot.val().applyCount);
   
       
       
    });


*/
}); 
 

    }else{
   

        var row = "<tr> <td>" +  snapshot.val().title + "</td> <td>" + snapshot.val().category + "</td> <td>" + snapshot.val().date + "</td>  <td>" + snapshot.val().price + "</td> <td>" +
      "</td> </tr>" 
        $(row).appendTo('#jobs');
  
        
    }
    
  });
                 //data freelancere ise; sayfa kontrolü yaparak employer sayfalarına gitmeyi önler              
                
               });
    
       
               
       
       
            }
    // kullanıcı giriş yapmamış olduğundan içeri giremez
               else{
                var path = window.location.pathname;
                var page = path.split("/").pop();
               
                 if (page !== "login.html" && page !== "register.html" && page !== "index.html"  ) {
                  window.location.href = "login.html"; 
                }
               
            }
    
            })
    }
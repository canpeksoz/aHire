window.onload(localStorage.getItem("JobId"));
console.log(localStorage.getItem("JobId"));
  

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
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
  //const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const dbRef = ref(getDatabase());
  var tmp=0;



  
function GetAll(tmp, count,usermail,userID){
 
while(tmp<count){
   
  const Jobs = ref(database, 'Jobs/'+tmp);

  onValue(Jobs, (snapshot) => {
    
  
    const data = snapshot.val();
    
    var id=data.count;
//jobu oluşturanın maili = ise şu anki kullanıcının mailine o zaman verileri basıyor
    if(usermail==data.mail){
    
   
        if(data.whoApplied){
            data.whoApplied.forEach(myFunction)

            function myFunction(item, index, arr) {
                arr[index] = item.user;
        

             
const getCandidateData = ref(database, 'users/'+ arr[index]+'/profile' );
onValue(getCandidateData, (snapshot) => {
  const username = snapshot.val().username;
  const ability= snapshot.val().Abilities;


  var row = "<tr> <td>" +  username + "</td>  <td>" + ability + "</td> <td>" +
  "<a type='button' class='btn btn-info' id='button' href='employerHiredJobs.html' >SELECT CANDIDATE</a>"+ "</td> </tr>" 
  $(row).appendTo('#jobs');

  var button = document.getElementById("button");

button.setAttribute("id",id);

button.addEventListener("click", function(event){

    update(ref(database,'Jobs/'+localStorage.getItem("JobId")),{

        hiredFreelancer: arr[index],
        isActive: false,
      isStarted: true,
   
       
      })

});




});
                   



                   

                

                
               
            }


      }
     

 
    } 
 
  });

  tmp++;
 
  
}

  
}

  tmp==0;
  //button onclick'te button id alsın
  

  
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
      
      get(child(dbRef, 'users/'+user.uid+'/profile')).then((snapshot) => {
        const usermail=snapshot.val().mail
        const userID=user.uid;
        GetAll(tmp,count,usermail,userID);
      });

  
  
  
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

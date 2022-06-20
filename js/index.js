import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, update, onValue, get,child } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";



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



  
function GetAll(tmp, count){
  
while(tmp<count){

  const Jobs = ref(database, 'Jobs/'+tmp);

  onValue(Jobs, (snapshot) => {
    
    const data = snapshot.val();
  //yalnızca işe başlanmadıysa ve iş tamamlanmadıysa burada gösterilebilir  
if(data.isDone==false && data.isStarted==false){

  var id=data.count;
  
  var row = "<tr> <td>" +  snapshot.val().title + "</td> <td>" + snapshot.val().category + "</td> <td>" + snapshot.val().date + "</td>  <td>" + snapshot.val().price + "</td> <td>" +
   "</td> </tr>" 
   $(row).appendTo('#jobs');

   var button = document.getElementById("button");
 
button.setAttribute("id",id);

    //buton içinde id hep en son count olarak dönüyor. Her buton aynı sayı dönüyor.
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

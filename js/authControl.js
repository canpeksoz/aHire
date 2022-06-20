import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
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
 // const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);


  const user= auth.currentUser;


  window.onload = function(){

onAuthStateChanged(auth,(user)=>{

           if(user){
           user = auth.currentUser;

           const getType = ref(database, 'users/' + user.uid +"/profile");
           onValue(getType, (snapshot) => {

             const data = snapshot.val().type;
             var path = window.location.pathname;
             var page = path.split("/").pop();

             //data freelancere ise; sayfa kontrolü yaparak employer sayfalarına gitmeyi önler
             if (data == "Freelancer") {
               if (page == "employerAfterLoginHome.html" || page == "employerHiredJobs.html" || page == "addPost.html" || page == "adminAfterLoginHome.html" || page == "adminLogin.html"
                 || page == "adminPaymentTransaction.html" || page == "adminProfileEdit.html" || page == "jobDetailsEmployer.html"
                 || page == "adminRegister.html" || page == "adminWaitingTickets.html" || page == "employerProfile.html" || page == "employerProfileEdit.html"
                 || page == "employerProofofWork.html" || page == "index.html") {
                 window.location.href = "freelancerAfterLoginHome.html";
               }
               
            } else if (data == "Employer") {
               if (page == "freelancerAfterLoginHome.html" || page == "freelancerHiredJobs.html" || page == "freelancerAppliedJobs.html"
                 || page == "adminAfterLoginHome.html" || page == "adminLogin.html" || page == "jobDetails.html"
                 || page == "adminPaymentTransaction.html" || page == "adminProfileEdit.html"
                 || page == "adminRegister.html" || page == "adminWaitingTickets.html"
                 || page == "freelancerProfile.html" || page == "freelancerProfileEdit.html"
                 || page == "freelancerProofOfWork.html" || page == "index.html"
                 || page == "Login.html" || page == "registration.html") {
                 window.location.href = "employerAfterLoginHome.html";
               }
               
            }
            
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

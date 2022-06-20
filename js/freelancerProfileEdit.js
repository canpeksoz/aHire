import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, ref, update, onValue} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";


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
const user = auth.currentUser;

  window.onload = function(){

      onAuthStateChanged(auth, (user) => {

          if (user) {
            user = auth.currentUser;
              freelancerUpdate.addEventListener('click', (e) => {
                  let Abilities = document.getElementById('Abilities').value;
console.log(Abilities);
            update(ref(database, 'users/' + user.uid + '/profile'),
                
            {
               Abilities: Abilities
 
})

    alert('Update Successfully !')
  //window.location.href = "freelancerProfile.html";

});
                   
        }

        })
}





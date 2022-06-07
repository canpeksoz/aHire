

  var firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);

  const checkoutButton = document.getElementById('checkout-button')
  const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout')
  const stripe = Stripe('sk_test_51HQCK2IpjhvxrsSO3wt8Nsc6KnhyKshPZuX1MYbgw2o4xiz2ccL4xqrNtAJMi2zJCAtikDnlHwKb7vOfQKSPnzdD000RK4CMeD')
  
checkoutButton.addEventListener('click', () => {
      console.log('clicked')
    createStripeCheckout()
      .then(response => {
        const sessionId = response.data.id
        stripe.redirectToCheckout({ sessionId: sessionId })
      })
  })
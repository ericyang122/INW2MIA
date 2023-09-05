const firebaseConfig = {
    apiKey: "AIzaSyAMmjB3jFF4L_X6yvpQ1g8F-OW5Zq_sqLE",
    authDomain: "projeto2miateste-50d0b.firebaseapp.com",
    projectId: "projeto2miateste-50d0b",
    storageBucket: "projeto2miateste-50d0b.appspot.com",
    messagingSenderId: "556615804138",
    appId: "1:556615804138:web:3d5b4b212510a38044e393"
  };

  firebase.initializeApp(firebaseConfig);


/*
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;
  
    firebase.auth().signInWithEmailAndPassword(email,password).then((userCredential)=>{
        const user = userCredential.user;
        console.log("usuarios logado :", user)
    })
    .catch((error)=>{
        const errorMessage = errorMessage;
        console.error("ERRO DE AUTENTICACAO :", errorMessage)
    })
  }) */
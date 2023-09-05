function loginEmail(){
    var email = document.getElementById('email').value
    var password = document.getElementById('senha').value

    firebase.auth().signInWithEmailandPassword(email,password).then(()=>{
        alert('Usuário logado');
    }).cath(error=>{
        console.log('error', error)
    })
}
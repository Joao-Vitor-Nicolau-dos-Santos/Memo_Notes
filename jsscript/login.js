//Sistema de validação senha e e-mail

function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recuperar").disabled = !emailValid;

    const password = isPasswordValid() ;
    document.getElementById("entrar").disabled = !emailValid || !password;
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email){
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById('password').value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

//Redirecionamento do botão de entrar para tela inicial
function login() {
    firebase.initializeApp(firebaseConfig);

    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response =>{
    window.location = "landing.html";
        console.log('Sucesso',response)
    }).catch(error =>{
        alert(getErrorMessage(error));
        // console.log('Erro', error)
    })

}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found"){
        return "Usuário não encontrado";
    }
    return error.message;
}

//Redirecionamento do botão de registro para tela de registro
function registrar() {
    window.location = "marcacao\registro.html";
}

//Redirecionamento de botão para a de notas
function notas() {
    window.location = "index.html";
}
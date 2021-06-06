let inputEmail = document.getElementById ('inputEmail');
let inputPass = document.getElementById('inputPass');
let inputcfPass = document.getElementById('inputcfPass');

let signInBtn = document.getElementById('signUp');

let warnEmail = document.getElementById('warningEmail');
let warnPass = document.getElementById('warningPass');
let warnCfPass = document.getElementById('warningCfPass');

let signUpForm = document.getElementById('signUpForm')

signInBtn.addEventListener('click',function(){
    let myEmail= inputEmail.value
    let myPass= inputPass.value 
    let myCfPass= inputcfPass.value
    if (checkEmail(myEmail)== true && checkPassword(myPass) == true && myPass === myCfPass){
        window.location.replace('./log-in.html')
    }
})

function checkEmail(strEmail){
    const checkEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(strEmail);
}

function checkPassword(strPassword){
    if (strPassword.length >= 8 ){
        return true
    } else {
        return false 
    }
}

inputEmail.addEventListener("keyup",function(){
    let myEmail= inputEmail.value
        if (checkEmail(myEmail)== false){
            warnEmail.classList.remove('ghost')}
        else{warnEmail.classList.add('ghost')}
})

inputPass.addEventListener('keyup',function(){
    let myPass= inputPass.value
        if (checkPassword(myPass)==false){
            warnPass.classList.remove('ghost')
        } else{ warnPass.classList.add('ghost')}
})

inputcfPass.addEventListener('keyup',function(){
    let myPass= inputPass.value 
    let myCfPass= inputcfPass.value
        if(myPass !== myCfPass){
            warnCfPass.classList.remove('ghost')
        } else {warnCfPass.classList.add('ghost')}
})

function signIn(){
    let myEmail= inputEmail.value
    let myPass= inputPass.value 
    firebase.auth().createUserWithEmailAndPassword(myEmail,myPass)
.then((userCredential) => {
    
    var email = userCredential.myEmail;

    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
    });
}


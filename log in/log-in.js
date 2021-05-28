let signInEmail= document.getElementById('inputEmail')
let signInPass = document.getElementById('inputPass')

let signInBtn = document.getElementById('signInsubmit')

let warnEmail = document.getElementById('warnEmail')
let warnPass = document.getElementById('warnPass')

signInBtn.addEventListener('click',function(){
    let inputEmail = signInEmail.value
    let inputPass = signInPass.value
    if (checkEmail(inputEmail)== true && checkPassword(inputPass) == true){
        window.location.replace('../homepage/project.html')
    }
    console.log('ahihi')
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
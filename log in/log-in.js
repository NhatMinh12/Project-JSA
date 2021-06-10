let signInEmail = document.getElementById("inputEmail");
let signInPass = document.getElementById("inputPass");

let signInBtn = document.getElementById("signInsubmit");

let warnEmail = document.getElementById("warnEmail");
let warnPass = document.getElementById("warnPass");

var firebaseConfig = {
    apiKey: "AIzaSyCVlcNbbf__OqsHaxos1KJMjifad1XUZOs",
    authDomain: "todolist-f41e2.firebaseapp.com",
    databaseURL:
        "https://todolist-f41e2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-f41e2",
    storageBucket: "todolist-f41e2.appspot.com",
    messagingSenderId: "163425014358",
    appId: "1:163425014358:web:25d582cf3ed862ad48a1f7",
    measurementId: "G-07ZY0NQRQJ",
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebase.firestore();

signInBtn.addEventListener("click", function () {
    let inputEmail = signInEmail.value;
    let inputPass = signInPass.value;
    if (
        checkEmail(inputEmail) == true &&
        checkPassword(inputPass) == true
)
{
    db.collection("account").where("email", "==", inputEmail).where('password', '==', inputPass)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            window.location.href = '../homepage/project.html'
        });

    })
    .catch();
}
});

function checkEmail(strEmail) {
    const checkEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(strEmail);
}

function checkPassword(strPassword) {
    if (strPassword.length >= 8) {
        return true;
    } else {
        return false;
    }
}

inputEmail.addEventListener("keyup", function () {
    let myEmail = inputEmail.value;
    if (checkEmail(myEmail) == false) {
        warnEmail.classList.remove("ghost");
    } else {
        warnEmail.classList.add("ghost");
    }
});

inputPass.addEventListener("keyup", function () {
    let myPass = inputPass.value;
    if (checkPassword(myPass) == false) {
        warnPass.classList.remove("ghost");
    } else {
        warnPass.classList.add("ghost");
    }
});

let inputEmail = document.getElementById("inputEmail");
let inputPass = document.getElementById("inputPass");
let inputcfPass = document.getElementById("inputcfPass");

let checkingEmail = document.getElementById('checkingEmail')
let signUpBtn = document.getElementById("signUp");

let warnEmail = document.getElementById("warningEmail");
let warnPass = document.getElementById("warningPass");
let warnCfPass = document.getElementById("warningCfPass");

let signUpForm = document.getElementById("signUpForm");

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
var db = firebase.firestore();

signUpBtn.addEventListener("click", function () {
  let myEmail = inputEmail.value;
  let myPass = inputPass.value;
  let myCfPass = inputcfPass.value;

  if (checkEmail(myEmail) == true &&
    checkPassword(myPass) == true &&
    myPass === myCfPass) {
      console.log('ok');
      db.collection("account").where("email", "==", myEmail)
      .get()
      
      .then((querySnapshot) => {
        var y = 0
        querySnapshot.forEach((doc) => {
          if(doc.data().email == myEmail){
            y++
          }
        });
        console.log(y);
        if(y == 0){
          db.collection("account")
            .add({
              email: inputEmail.value,
              password: inputPass.value,
            })
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              window.location.href = './log-in.html'
          })
          .catch((error) => {
              console.error("Error adding document: ", error);
          });
        }else{
          warnEmail.style.display = 'block'
          warnPass.style.display = 'block'
        }
      })
      .catch((error) => {
      });
  } else{
    warnEmail.style.display = 'block'
    warnPass.style.display = 'block'
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
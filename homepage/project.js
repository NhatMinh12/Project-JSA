const db = firebase.firestore();
let logoutBtn = document.getElementById("light");
let input = document.getElementById("input");
let container = document.getElementById("container");
let input_time = document.getElementById("time-input");

let create_btn = document.getElementById("Create_btn");

create_btn.addEventListener("click", function () {
  if (input.value != "" && input_time.value != "") {
    createTask();
  } else {
    // noti a message
  }
});

setTimer();

function setTimer() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  setInterval(() => {
    var dateObj = new Date();
    var day = days[dateObj.getUTCDay()];
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var date = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    newdate = day + "," + date + "/" + month + "/" + year;
    document.getElementById("Time").textContent = newdate;
    var hour = dateObj.getUTCHours() + 7;
    var minute =
    (dateObj.getUTCMinutes() < 10 ? "0" : "") + dateObj.getUTCMinutes();
    newTime = hour + ":" + minute;
    document.getElementById("realTime").textContent = newTime;
  }, 1000);
}

function handleRemove(e) {
  const documentId = e.getAttribute("data-id");
  db.collection("tasks")
    .doc(documentId)
    .delete()
    .then((data) => {
    getTaskFromFireStore();
    });
}

function createTask() {
    let date = new Date();

    let newTask = {
    content: input.value,
    status: "ACTIVE",
    time: input_time.value, // get time in input
    user_id: localStorage.getItem("userId"),
  };

  db.collection("tasks")
    .add(newTask)
    .then((docRef) => {
    getTaskFromFireStore();
    input.value = "";
    })
    .catch((error) => {
    });
}

function getTaskFromFireStore() {
  db.collection("tasks")
    .where("user_id", "==", `${localStorage.getItem("userId")}`)
    .get()
    .then((querySnapshot) => {
    let result = [];
    querySnapshot.forEach((doc) => {
        let newnote = `<div class = 'note' task_id='${doc.id}'>
                            <div> <span id='dataContent'>${doc.data().content}</span> ${doc.data().time} 
                                <img class = 'plus remove' src = 'remove.png' data-id='${
                                    doc.id
                                }' onclick='handleRemove(this)'>
                            </div>
                        </div>`;
        result += newnote;
    });
    container.innerHTML = result;
    });
}

getTaskFromFireStore();

logoutBtn.addEventListener("click", function () {
  window.location.replace("../log in/log-in.html");
  localStorage.clear();
});

let homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click',function(){
  window.location.href='./project.html'
})
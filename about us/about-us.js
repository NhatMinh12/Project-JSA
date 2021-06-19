setTimer();
let logoutBtn = document.getElementById("light");
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

logoutBtn.addEventListener("click", function () {
    window.location.replace("../log in/log-in.html");
    localStorage.clear();
});
  
let homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click',function(){
    window.location.href='../homepage/project.html'
})
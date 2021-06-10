var dateObj = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = days[dateObj.getUTCDay()]
var month = dateObj.getUTCMonth() +1; //months from 1-12
var date = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
let input = document.getElementById("input")
newdate = day + ',' + date + "/" + month + "/" + year;

document.getElementById("Time").textContent = newdate

var hour = dateObj.getUTCHours() +7;
var minute = dateObj.getUTCMinutes();
newTime = hour +':'+ minute
document.getElementById('realTime').textContent = newTime

let container = document.getElementById('container')
let input_time = document.getElementById('time-input')

let create_btn = document.getElementById("Create_btn");
create_btn.addEventListener('click', function(){
    if(input.value != "" && input_time.value != ""){
        createTask()
    }else{
        // noti a message
    }
}) 

function handleRemove(e){
    // console.log(e);
    let parentTag = e.parentNode.parentNode
    console.log(parentTag.getAttribute('task_id'));
    parentTag.remove()
}

function createTask(){
    let date = new Date()

    let newTask = {
        content: input.value,
        status: "ACTIVE",
        time: input_time.value, // get time in input 
        user_id: localStorage.getItem('userId')
    }

    database.collection("tasks").add(newTask)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        let newnote = `<div class = 'note'>
                            <div> ${newTask.content} ${newTask.time} 
                                <img class = 'plus remove' src = 'remove.png' onclick='handleRemove(this)'>
                            </div>
                        </div>`
        
        container.insertAdjacentHTML('afterbegin',newnote);
        input.value='';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
}

function getTaskFromFireStore(){
    database.collection("tasks").where("user_id", "==", `${localStorage.getItem('userId')}`).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().content}`);
            let newnote = `<div class = 'note' task_id='${doc.id}'>
                            <div> ${doc.data().content} ${doc.data().time} 
                                <img class = 'plus remove' src = 'remove.png' onclick='handleRemove(this)'>
                            </div>
                        </div>`
        
            container.insertAdjacentHTML('afterbegin',newnote);
        });
    });
}

getTaskFromFireStore()

//update
// var db = firebase.firestore();
// db.collection("users").doc(doc.id).update({foo: "bar"});

// var cityRef = db.collection('tasks').doc('id_task');

// // Remove the 'capital' field from the document
// var removeCapital = cityRef.update({
//     capital: firebase.firestore.FieldValue.delete()
// });
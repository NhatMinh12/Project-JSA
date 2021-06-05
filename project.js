var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
let input = document.getElementById("input")
newdate = year + "/" + month + "/" + day;
document.getElementById("Time").textContent = newdate
let container = document.getElementById('container')

let create_btn = document.getElementById("Create_btn");
    create_btn.addEventListener('click', function () {
        let task = input.value
        if(task != ''){
        let newnote = `<div class = 'note'><div>
        <div> ${task} 
        <img class = 'plus' src = 'remove.png'>
        </div></div>`
        
            container.insertAdjacentHTML('afterbegin',newnote)  
        }
    }) 
    
const inputArea = document.getElementById('input-area');
const listContainer = document.getElementById('list-container');


function addTask(){
    if (inputArea.value === ''){
        alert('You have to type something');
        

    }
    else {
        let li=document.createElement("li")
        li.innerHTML = inputArea.value;
        listContainer.appendChild(li);

        // adding cross or delete sign by the list
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputArea.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }

 else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData();
 } 
}, false);


// Storing Tasks in our browser so that after refreshing the page, we have all tasks saved

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") 
}
showTask();
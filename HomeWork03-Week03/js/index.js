// You are about to create your own Task List.
// The user might be able to:
// - Create new tasks by writing them in a text box and pressing a button to add them
// - Mark a task as completed by clicking on it. The element should look different when completed
// - Restore a completed task by clicking on it. 
// - Have a checkbox to show only "non-completed" tasks
// - Add a button to clear the list
// ​
// ​
// Hints:
// - Create the list elements using the createElement function
// - Add the event to them and pass the event to the function that should handle it
// - Rememeber that from the event you can access to the element that generated it using the .target property

function addParagraph() {
    var paragraph = document.createElement("p");
    paragraph.innerText = "This is a Paragraph!";
    document.body.appendChild(paragraph);
}

// function addDiv() {
//     var newDiv = document.createElement("div");
//     newDiv.innerText = "This is a Div!";
//     document.body.appendChild(newDiv);
// }

function addNewTask() {
    let newTask = document.getElementById("newTask").value;
    document.createElement("li");
    newTask.innerText = newTask;
    document.body.appendChild(newTask);
}

function myFunction() { 
    let x =  
        document.getElementById("newTask").value; 
        document.getElementById("Task").innerHTML = x; 
}

// Create a new list item when clicking on the "Add" button
// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("newTask").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("newTask").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
  

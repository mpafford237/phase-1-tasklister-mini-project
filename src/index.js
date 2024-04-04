// Ensures that DOM has loaded before editing can take place
document.addEventListener("DOMContentLoaded", () => {
  // Indicator of DOM being ready.
  console.log("DOM content has loaded!")
  // Assignment of variables related to functional components of page
  let taskButtons = document.querySelectorAll("input")
  let taskDesc = taskButtons[0]
  let dueDate = taskButtons[1]
  let submitButton = taskButtons[2]
  let taskList = document.getElementById("tasks")

  function addTask(event) {
    event.preventDefault();
    // Create a list item for the task
    let taskItem = document.createElement("li")

    // Move assigned priority from dropdown to list
    let priority = document.getElementById("task-priority").value;
    taskItem.classList.add(priority);

    // Create the task and append it first with due date. create text node is similar to .innerHTML
    let taskText = document.createTextNode(`${taskDesc.value} - Due: ${dueDate.value}`)
    taskItem.appendChild(taskText);

    // Create Delete button and add functionality 'onclick' which acts as an event listener for a click
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-button")
    deleteButton.textContent = 'X'
    deleteButton.onclick = function() {
      taskItem.remove()
    }
    taskItem.appendChild(deleteButton)
    // Adds full item to the list
    taskList.appendChild(taskItem);
    taskDesc.value = ""
    dueDate.value = ""
  }
  
  submitButton.addEventListener("click", addTask)

  
  //I want to add to this project in the future! I have a custom project that I want to get working on that might be based on this!

});


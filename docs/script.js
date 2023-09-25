// Create DOM elements
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskButton");

// Create a function to create a new task Item
function createTaskItem(taskText, taskDate, taskTime) {
  const list = document.createElement("li");

  //Create a span for the task description
  const taskDescription = document.createElement("span");
  taskDescription.textContent = taskText;

  //Create a span for the task date and time
  const taskDateAndTime = document.createElement("span");
  taskDateAndTime.textContent = `Date: ${taskDate}, Time: ${taskTime}`;

  // Add an event listener to mark a task as completed
  list.addEventListener("click", function () {
    list.classList.toggle("completed");
  });

  // Add a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add an onclick event to delete a task
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(list);
  });

  list.appendChild(taskDescription);
  list.appendChild(taskDateAndTime);
  list.appendChild(deleteButton);

  return list;
}

// Add a new task
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;
  const taskTime = timeInput.value;

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText, taskDate, taskTime);
    taskList.appendChild(taskItem);
    taskInput.value = "";
    dateInput.value = "";
    timeInput.value = "";
  }
});

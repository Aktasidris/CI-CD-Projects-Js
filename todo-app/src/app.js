/**
 ##features/add-task function
    get input element and with .value() method get input value
    get addtask-btn by_ıd and create eventlistner using click event.
    control the ınput.value is empty after using trim() method
    if(true)
        create li element and assing task.textContent input.value
        add css classes
        add get task lint container to append a child using appendChild() method
        dont forget clear ınput value assing  "" {empty string}
 */

document.getElementById("add-task-btn").addEventListener("click", function () {
  let taskInput = document.getElementById("task-input").value;
  if (taskInput.trim() !== "") {
    let newTask = document.createElement("li");
    newTask.textContent = taskInput;
    newTask.classList.add("text-green-600");
    document.getElementById("task-list").appendChild(newTask);
    taskInput.value = "";
  }
});

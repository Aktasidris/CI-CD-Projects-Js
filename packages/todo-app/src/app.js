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
const addbtn = document.getElementById("add-task-btn"); //tıklama
let taskInput = document.getElementById("task-input"); // değeri al işle
let tasklist = document.getElementById("task-list"); //gelen değeri listele

function addtask() {
  const taskText = taskInput.value.trim(); //value sagdan soldan trim ile boşlukları sil
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    let taskItemclasses = "flex justify-around hover:bg";
    taskItem.classList.add(taskItemclasses);

    // Task metni
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("text-green-600");
    taskSpan.textContent = taskText;

    // Silme butonu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function () {
      taskItem.remove();
    };
    // Task item'a task metni ve silme butonunu ekle
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    // Listeye task ekle
    tasklist.appendChild(taskItem);

    // Inputu temizle
    taskInput.value = "";
  }
}
// Add task butonuna event listener ekle
addbtn.addEventListener("click", addtask);

// Enter tuşu ile de task ekleme
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addtask();
  }
});

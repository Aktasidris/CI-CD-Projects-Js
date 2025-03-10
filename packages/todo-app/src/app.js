const addBtn = document.getElementById("add-task-btn"); // Ekleme butonu
const taskInput = document.getElementById("task-input"); // Input alanı
const taskList = document.getElementById("task-list"); // Liste alanı
module.exports = { addTask };
function addTask() {
  const taskText = taskInput.value.trim(); // Boşlukları temizle
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add(
      "flex",
      "justify-between",
      "p-2",
      "bg-cyan-200",
      "hover:opacity-90",
      "my-1.5"
    );

    // Task metni
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("text-green-600", "content-center");
    taskSpan.textContent = taskText;

    // Checkbox (Tamamlama işlevi)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        taskSpan.classList.add("line-through", "text-red-600");
        taskSpan.classList.remove("text-green-600");
      } else {
        taskSpan.classList.remove("line-through", "text-red-600");
        taskSpan.classList.add("text-green-600");
      }
    });

    // Silme butonu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add(
      "delete-btn",
      "text-red-600",
      "ml-2",
      "hover:opacity-70"
    );
    deleteButton.addEventListener("click", () => taskItem.remove());

    // Task öğesine elemanları ekle
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(checkbox);
    taskItem.appendChild(deleteButton);

    // Listeye task ekle
    taskList.appendChild(taskItem);

    // Input'u temizle
    taskInput.value = "";
  }
}
// Add task butonuna event listener ekle
addBtn.addEventListener("click", addTask);

// Enter tuşu ile de task ekleme
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Filtreleme fonksiyonu
document.querySelectorAll(".filter-tasks button").forEach((button) => {
  button.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter");
    document.querySelectorAll("#task-list li").forEach((task) => {
      const isCompleted = task
        .querySelector("span")
        .classList.contains("line-through");
      if (filter === "all") {
        task.style.display = "flex";
      } else if (filter === "active" && !isCompleted) {
        task.style.display = "flex";
      } else if (filter === "completed" && isCompleted) {
        task.style.display = "flex";
      } else {
        task.style.display = "none";
      }
    });
  });
});

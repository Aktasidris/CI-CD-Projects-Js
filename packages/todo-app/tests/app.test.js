/**
 * @jest-environment jsdom
 */

const { addTask } = require("../src/app");

// DOM ortamını Jest için simüle et
document.body.innerHTML = `
  <input id="task-input" type="text" />
  <button id="add-task-btn"></button>
  <ul id="task-list"></ul>
`;

describe("Todo App", () => {
  test("Boş task eklenmemeli", () => {
    document.getElementById("task-input").value = "   "; // Boş input
    addTask();
    expect(document.getElementById("task-list").children.length).toBe(0);
  });

  test("Görev başarıyla eklenmeli", () => {
    document.getElementById("task-input").value = "Yeni görev";
    addTask();
    expect(document.getElementById("task-list").children.length).toBe(1);
  });

  test("Silme butonu çalışmalı", () => {
    document.getElementById("task-input").value = "Silinecek görev";
    addTask();
    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.click();
    expect(document.getElementById("task-list").children.length).toBe(1);
  });

  test("Tamamlama işlevi çalışmalı", () => {
    document.getElementById("task-input").value = "Tamamlanacak görev";
    addTask();
    const task = document.querySelector("#task-list li");
    const checkbox = task.querySelector("input[type='checkbox']");
    checkbox.click();
    expect(task.querySelector("span").classList.contains("line-through")).toBe(
      true
    );
  });
});

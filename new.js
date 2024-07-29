document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("new-task");
  const taskList = document.getElementById("task-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(input.value);
    input.value = "";
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      removeTask(e.target.parentElement);
    } else if (e.target.tagName === "LI") {
      toggleComplete(e.target);
    }
  });

  function addTask(task) {
    const li = document.createElement("li");
    li.textContent = task;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  function removeTask(task) {
    taskList.removeChild(task);
  }

  function toggleComplete(task) {
    task.classList.toggle("completed");
  }
});

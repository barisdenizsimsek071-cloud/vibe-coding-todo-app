let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const item = document.createElement("li");

    const textSpan = document.createElement("span");
    textSpan.textContent = task;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      editTask(index);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      deleteTask(index);
    };

    item.appendChild(textSpan);
    item.appendChild(editBtn);
    item.appendChild(deleteBtn);
    list.appendChild(item);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (!value) return;

  tasks.push(value);
  input.value = "";
  saveTasks();
  render();
}

function editTask(index) {
  const current = tasks[index];
  const updated = prompt("Edit task:", current);
  if (updated !== null) {
    const trimmed = updated.trim();
    if (trimmed) {
      tasks[index] = trimmed;
      saveTasks();
      render();
    }
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  render();
}

render();

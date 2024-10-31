const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const clearAllBtn = document.getElementById('clear-all-btn');

addTaskBtn.addEventListener('click', addTask);
clearAllBtn.addEventListener('click', clearAll);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = document.createElement('li');
        task.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(task);
        taskInput.value = '';
    }
}

function removeTask(element) {
    element.parentElement.remove();
}

function clearAll() {
    taskList.innerHTML = '';
}

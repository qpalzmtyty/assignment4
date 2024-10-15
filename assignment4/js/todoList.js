document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    if (!taskInput) {
        alert("Task cannot be empty.");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskInput;
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
});
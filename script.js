function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="toggleTask(this)">Check</button>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  function toggleTask(button) {
    const task = button.parentNode;
    task.classList.toggle('completed');
  }
  
  function removeTask(button) {
    const task = button.parentNode;
    task.parentNode.removeChild(task);
  }
  
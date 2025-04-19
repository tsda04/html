const tasks = [];

function renderTasks() {
  $('#todo-list').empty();
  
  tasks.forEach((task, index) => {
    const listItem = $(`
      <li class="todo-item ${task.completed ? 'completed' : ''}">
        <span>${task.text}</span>
        <button class="rename-btn">✏</button>
        <button class="delete-btn">❌</button>
      </li>
    `);
    
    // Обработчик для отметки выполнения
    listItem.on('click', function(e) {
      if (!$(e.target).is('button')) {
        task.completed = !task.completed;
        $(this).toggleClass('completed');
      }
    });
    
    // Обработчик для переименования
    listItem.find('.rename-btn').on('click', function(e) {
      e.stopPropagation();
      const newText = prompt('Введите новое название задачи:', task.text);
      if (newText !== null && newText.trim() !== '') {
        task.text = newText.trim();
        renderTasks();
      }
    });
    
    // Обработчик для удаления
    listItem.find('.delete-btn').on('click', function(e) {
      e.stopPropagation();
      tasks.splice(index, 1);
      renderTasks();
    });
    
    $('#todo-list').append(listItem);
  });
}

function addTask() {
  const newTask = $('#new-task').val().trim();
  if (newTask !== '') {
    tasks.push({ text: newTask, completed: false });
    $('#new-task').val('');
    renderTasks();
  }
}

$('form').on('submit', function(e) {
  e.preventDefault();
  addTask();
});
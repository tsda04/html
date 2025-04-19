const tasks = [];

      function addTask() {
        const newTask = document.getElementById('new-task').value;
        if (newTask.trim() !== '') {
          tasks.push({ task: newTask, completed: false });
          renderTasks();
          document.getElementById('new-task').value = '';
        }
      }

      function renderTasks() {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';

        tasks.forEach((taskObj, index) => {
          const listItem = document.createElement('li');
          listItem.className = 'todo-item';
          if (taskObj.completed) {
            listItem.classList.add('completed');
          }

          const taskNameElement = document.createElement('span');
          taskNameElement.innerText = taskObj.task;

          // Кнопка переименования
          const renameButton = document.createElement('button');
          renameButton.innerHTML = '✏';
          renameButton.className = 'action-button';
          renameButton.onclick = (e) => {
            e.stopPropagation();
            const newName = prompt('Введите новое название задачи:', taskObj.task);
            if (newName !== null && newName.trim() !== '') {
              tasks[index].task = newName.trim();
              renderTasks();
            }
          };

          // Кнопка удаления
          const deleteButton = document.createElement('button');
          deleteButton.innerHTML = '❌';
          deleteButton.className = 'action-button';
          deleteButton.onclick = (e) => {
            e.stopPropagation();
            tasks.splice(index, 1);
            renderTasks();
          };

          listItem.appendChild(taskNameElement);
          listItem.appendChild(renameButton);
          listItem.appendChild(deleteButton);

          listItem.addEventListener('click', function () {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
          });

          todoList.appendChild(listItem);
        });
      }

      document.getElementById('add-button').onclick = addTask;

      // Добавляем возможность добавления задачи по нажатию Enter
      document.getElementById('new-task').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          addTask();
        }
      });
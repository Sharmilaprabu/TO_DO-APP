document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        addTodo(input.value);
        input.value = ''; // Clear the input field
    });

    todoList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    function addTodo(todo) {
        const li = document.createElement('li');
        li.textContent = todo;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});

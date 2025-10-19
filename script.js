const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

addBtn.addEventListener('click', addTodo);

function addTodo() {
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.classList.add('delete-btn');
  delBtn.onclick = () => li.remove();

  li.onclick = () => li.classList.toggle('completed');
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';
}

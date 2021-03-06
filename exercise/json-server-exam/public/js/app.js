// variable
let todos = [];

// DOM selector
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

// REST API (GET, POST, PATCH, DELETE)
const ajax = (method, url, callback, payload) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.send(JSON.stringify(payload));
  xhr.onload = () => {
    if ((xhr.status === 200) || (xhr.status === 201)) {
      callback(JSON.parse(xhr.response));
    } else {
      console.error(`${xhr.status}, ${xhr.statusText}`);
    }
  };
};

// function
const render = () => {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `<li id=${id}>
      <input type="checkbox" ${completed ? 'checked' : ''}>
      <span>${content}</span>
      <button>X</button>
    </li>`;
  });
  $todos.innerHTML = html;
};

const generateId = () => (todos.length ? (Math.max(...todos.map(todo => todo.id)) + 1) : 1);

// GET
const getTodos = () => {
  ajax('GET', '/todos', data => {
    todos = data.sort((a, b) => b.id - a.id);
    render();
  });
};

// POST
const post = content => {
  ajax('POST', '/todos', data => {
    todos = [data, ...todos];
    render();
  }, { id: generateId(), content, completed: false });
};

// PATCH
const patch = target => {
  ajax('PATCH', `/todos/${+target.parentNode.id}`, data => {
    todos = todos.map(todo => (todo.id === data.id ? data : todo));
    render();
  }, { completed: target.checked });
};

// DELETE
const remove = target => {
  const targetId = +target.parentNode.id;
  ajax('DELETE', `/todos/${targetId}`, () => {
    todos = todos.filter(({ id }) => id !== targetId);
    render();
  });
};

// Event binding
window.onload = getTodos;

$inputTodo.addEventListener('keyup', ({ keyCode, target }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  post(content);
  target.value = '';
});

$todos.addEventListener('change', ({ target }) => patch(target));

$todos.addEventListener('click', ({ target }) => {
  if (!target.matches('.todos > li > button')) return;
  remove(target);
});

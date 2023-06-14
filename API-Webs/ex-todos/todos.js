function createCheckbox(checked) {
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = checked;
  return checkboxEl
}

function createInput(title) {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todos-row-input';
  inputEl.value = title;
  return inputEl;
}

function createSpan(title) {
  const spanEl = document.createElement('span');
  spanEl.className = "todos-row-text";
  spanEl.innerText = title;
  return spanEl
}

function createButton() {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'todos-row-delete btn btn-blue';
  buttonEl.innerText = '-';
  return buttonEl;
}

/**
 * @param {object} options
 * @param {number} options.id
 * @param {string} options.title
 * @param {boolean} options.completed
 */
function createTodoRow(options) {
  const divEl = document.createElement('div');
  divEl.className = "todos-row";
  divEl.dataset.todoId = options.id;

  const checkboxEl = createCheckbox(options.completed)
  divEl.append(checkboxEl);

  const spanEl = createSpan(options.title)
  divEl.append(spanEl);

  const buttonEl = createButton();
  divEl.append(buttonEl);

  return divEl;
}

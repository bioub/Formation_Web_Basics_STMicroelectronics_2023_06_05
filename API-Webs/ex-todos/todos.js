function createCheckbox(checked) {
  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = checked;
  return checkboxEl
}

function createInput(title) {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = title;
  inputEl.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      inputEl.replaceWith(createSpan(inputEl.value));
    }
  });
  return inputEl;
}

function createSpan(title) {
  const spanEl = document.createElement('span');
  spanEl.className = "todos-row-text";
  spanEl.innerText = title;
  spanEl.addEventListener('dblclick', () => {
    spanEl.replaceWith(createInput(title));
  });
  return spanEl
}

function createButton() {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'todos-row-delete';
  buttonEl.innerText = '-';
  buttonEl.addEventListener('click', () => {
    divEl.remove();
  });

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



  /* Exercice 4
  Au double click de spanEl
  Remplacer spanEl par une balise <input type="text" dont la valeur sera
  le contenu de spanEl
  Ecouter ensuite l'événement keyup de cette balise input, si
  cela correspond à la touche ENTREE revenir à la balise span
  */


  return divEl;
}

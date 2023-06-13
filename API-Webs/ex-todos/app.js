/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const checkboxEl = document.querySelector('.todos-form-checkbox');

/** @type {HTMLInputElement} */
const textEl = document.querySelector('.todos-form-text');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

formEl.addEventListener('submit', (event) => {
  // empeche le navigateur d'effection son action par défaut
  // annule l'évévenent
  // et dans ce cas (submit d'un form), reste sur la page actuelle
  event.preventDefault();

  const todoRowEl = createTodoRow({
    id: Math.random(),
    title: 'Acheter du pain',
    completed: true,
  });

  listEl.append(todoRowEl);
});

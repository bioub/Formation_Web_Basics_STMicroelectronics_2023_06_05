// Ici on ne peut sélectionner que les éléments
// présents au chargement de la page
// (le bouton moins n'existe pas au chargement et
// ne peut donc être sélectionné ici)

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-form-checkbox');

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
    title: textEl.value,
    completed: false,
  });

  listEl.append(todoRowEl);
});

/* Exercice 3
Ecouter le click de checkboxEl (la checkbox globale)
Et cocher ou décocher toutes les checkboxes de la liste
Pour sélectionner plusieurs élement on utiliser document.querySelectorAll()
et boucler ensuite sur le résultat
*/
toggleEl.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.todos-row input[type="checkbox"]');

  for (const checkbox of checkboxes) {
    checkbox.checked = toggleEl.checked;
  }
});

// Exercice 5
// Rappatrier les 3 addEventListener présents dans todos.js
// Pour cela écouter les événements au niveau de listEl (qui existe au chargement)
// et vous servir de event.target pour savoir si on a déclenché l'événement
// sur le bouton moins, sur la balise span, sur la balise input
// (avec une classe c'est préférable)
listEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todos-row-delete')) {
    target.closest('.todos-row').remove();
  }
});

listEl.addEventListener('dblclick', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todos-row-text')) {
    target.replaceWith(createInput(target.innerText));
  }
});

listEl.addEventListener('keyup', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;
  if (target.classList.contains('todos-row-input') && event.code === 'Enter') {
    target.replaceWith(createSpan(target.value));
  }
});

// Exercice 6
// En utilisant la fonction fetch
// Interroger le serveur https://jsonplaceholder.typicode.com/todos
// Créer Autant de ligne qu'il y a de résultats à cette requete
// en vous inspirant du addEventListener submit du formulaire et de l'ex
// geocoding

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((todos) => {
    for (const todo of todos) {
      const todoRowEl = createTodoRow(todo);
      listEl.append(todoRowEl);
    }
  });

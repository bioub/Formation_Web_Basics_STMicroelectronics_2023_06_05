// Exercice 1
// Sélectionner les champs prénoms et noms
// Ecouter l'événement input sur ces champs
// Dans le callback de input (event) => {}, event.target.value
// correspond à la valeur saisie dans le champs
// Si le champ est vide afficher une erreur dans la div  dont l'id est "erreur"

// Exercice 2
// Reprendre le code existant
// Afficher chaque erreur sous le champ
// plutot que de la balise <div id="erreur"></div>
// créer une nouvelle balise comme pour les todos
// Utiliser CSSOM pour encadrer en rouge le champ en erreur
// en utilisant par exemple le CSS : border: 2px solid red

/** @type {HTMLInputElement} */
const inputPrenomEl = document.querySelector(".input-prenom");

/** @type {HTMLInputElement} */
const inputNomEl = document.querySelector(".input-nom");

inputPrenomEl.addEventListener("input", (event) => {
  // ? veut dire si .matches('.erreur') est différent de null ou undefined
  event.target.closest(".form-row").querySelector(".erreur")?.remove();
  event.target.classList.remove("error-field");

  const value = event.target.value;

  if (!value) {
    event.target.classList.add("error-field");

    /** @type {HTMLDivElement} */
    const erreurEl = document.createElement("div");
    erreurEl.className = "erreur";
    erreurEl.innerText = "Le prénom est obligatoire";
    event.target.closest(".form-fields").after(erreurEl);
  }
});

inputNomEl.addEventListener("input", (event) => {
  // ? veut dire si .matches('.erreur') est différent de null ou undefined
  event.target.closest(".form-row").querySelector(".erreur")?.remove();
  event.target.classList.remove("error-field");

  const value = event.target.value;

  if (!value) {
    event.target.classList.add("error-field");

    /** @type {HTMLDivElement} */
    const erreurEl = document.createElement("div");
    erreurEl.className = "erreur";
    erreurEl.innerText = "Le nom est obligatoire";
    event.target.closest(".form-fields").after(erreurEl);
  }
});

// Exercice 2
// Sur l'événement input
// Utiliser une expression régulière, pour vérifier
// que le username ne contiennent que des lettres latines non-accentuées (abc...), des chiffres et des underscores _
// Si le champ est invalide, afficher une erreur dans la div dont l'id est "erreur"
const inputUsernameEl = document.querySelector(".input-username");

inputUsernameEl.addEventListener("input", (event) => {
  // ? veut dire si .matches('.erreur') est différent de null ou undefined
  event.target.closest(".form-row").querySelector(".erreur")?.remove();
  event.target.classList.remove("error-field");

  const value = event.target.value;

  if (!value.match(/^[a-z0-9_]*$/i)) {
    event.target.classList.add("error-field");

    /** @type {HTMLDivElement} */
    const erreurEl = document.createElement("div");
    erreurEl.className = "erreur";
    erreurEl.innerText =
      "Le username ne contient que des lettres latines non-accentuées, chiffres ou underscore";
    event.target.closest(".form-fields").after(erreurEl);
  }
});

// Exercice 3
// Sur l'événement input
// Vérifier que le mot de passe correspond à la confirmation
// Si le champ est invalide, afficher une erreur dans la div dont l'id est "erreur"
const inputPasswordEl = document.querySelector(".input-password");
const inputRepeatEl = document.querySelector(".input-repeat");

inputRepeatEl.addEventListener("input", (event) => {
  // ? veut dire si .matches('.erreur') est différent de null ou undefined
  event.target.closest(".form-row").querySelector(".erreur")?.remove();
  event.target.classList.remove("error-field");

  const value = event.target.value;

  if (value !== inputPasswordEl.value) {
    event.target.classList.add("error-field");

    /** @type {HTMLDivElement} */
    const erreurEl = document.createElement("div");
    erreurEl.className = "erreur";
    erreurEl.innerText =
      "Le mot de passe et sa confirmation ne correspondent pas";
    event.target.closest(".form-fields").after(erreurEl);
  }
});

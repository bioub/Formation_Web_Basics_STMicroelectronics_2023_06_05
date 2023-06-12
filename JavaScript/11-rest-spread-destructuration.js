function sum(a, b, ...others) {
  let result =  a + b;

  for (const other of others) {
    result += other;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5));

// REST operator ...
// Conversion de syntaxe :
// liste de valeurs (ici 3, 4, 5)
// ->
// tableau de valeurs (ici [3, 4, 5])


// SPREAD operator ...
// Conversion de syntaxe :
// tableau de valeurs (ici [3, 4, 5])
// ->
// liste de valeurs (ici 3, 4, 5)

function multiply(a, b, c) {
  return a * b * c;
}

const nbs = [2, 3, 4];
console.log(multiply(...nbs)); // 24

// SPREAD et REST
// le même symbole ...
// Pas du même coté de l'affectation
// SPREAD à droite du =, à l'appel de la fonction
// REST à gauche du =, à la déclaration de la fonction

const cloneNbs = [...nbs]; // ES5 nbs.slice();

// Destructuration
const fullName = 'Romain Bohdanowicz';
// const tmp = fullName.split(' '); // ['Romain', 'Bohdanowicz'];
// const firstName = tmp[0];
// const lastName = tmp[1];

 //   ['Romain' , 'Bohdan']
const [firstName, lastName] = fullName.split(' ');

// Cumulé avec default et REST :
const [deux = 2, ...troisEtQuatre] = nbs;

// IDEM sur les Objets

// REST et SPREAD (ES2018)
const coords = { x: 1, y: 2 };

const cloneCoords = { ...coords };

// Destructurer
//    { x: 1       , y: 2 };
const { x: myVarX } = coords;
console.log(myVarX); // 1

// Cumulé avec Shorthand property, default, REST
const { z = 0, ...coords2d } = coords;

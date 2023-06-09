// Un objet c'est un moyen de regrouper des valeurs et des fonctions
// Ex :

// des valeurs appelées "propriétés" (propriété PI)
console.log(Math.PI); // 3.14.....

// des fonction appelées "méthodes" (méthode random)
console.log(Math.random()); // 0.34534453 par exemple

// La programmation orientée objet est un paradigme de programmation
// c'est à dire un style qu'on donne à son code
// on arrive au même résultat que sans objets
// des avantages dans la réutilisation du code

// L'objet en JS est particulier/exotique (à cause du risque de perte de part
// de marché de Java)

// L'objet JS est un système clé/valeur dynamique et extensible
// contrairement à la plupart des langages où l'objet est un système clé/valeur
// statique et non extensible

// Dans la plupart des langages on a un concept clé/valeur dynamique et extensible
// qui n'est pas de l'objet
// PHP : tableaux associatifs
// Java, C++ : Map, HashTable
// C : Struct
// C# : Dictionary
// Python : dictionary
// Ruby : Hash

// En terme de syntaxe on est très proches des syntaxes objets (Java)

// Exemple illustrant le coté dynamique et extensible

// La méthode sum de Math n'existe pas :
// console.log(Math.sum(1, 2)); // TypeError: Math.sum is not a function

// On peut la créer en étendant l'objet Math :
Math.sum = (a, b) => {
  return a + b;
};
console.log(Math.sum(1, 2));

// On peut modifier la clés/valeurs (ici random) :
Math.random = () => {
  return 0.5;
};

console.log(Math.random()); // 0.5
console.log(Math.random()); // 0.5
console.log(Math.random()); // 0.5

// On peut supprimer des clés/valeurs (ici sum) :
delete Math.sum;
// console.log(Math.sum(1, 2)); // TypeError: Math.sum is not a function

// Mauvaise pratique de modifier des objets standards (Math, document, etc...)

// On peut créer ses propres objets, avec 2 possibilités
// object literal
// use cases :
// - l'objet ne sera pas créé plus d'une fois
// - l'objet sera créé plusieurs fois mais sans méthodes
const coords = {
  x: 1,
  y: 2, // virgule finale optionnelle
};

const MyMath = {
  sum(a, b) {
    return a + b;
  }
};

console.log(MyMath.sum(1, 2));

// constructor (class)
// en JS, User est une fonction appelée avec new
// - l'objet sera créé plusieurs fois avec des méthodes
// function User(name) {
//   // pseudo variable this (correspond à l'objet créé)
//   // this est créée automatique à l'appel de la fonction
//   this.name = name;

//   // si hello créé ici, autant de fonction hello créées que d'objet user
//   // this.hello = function() {
//   //   return `Hello ${this.name}`;
//   // };
// }

// // la méthode hello n'est créé qu'une fois
// User.prototype.hello = function() {
//   return `Hello ${this.name}`;
// };

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

const user1 = new User('romain');
const user2 = new User('toto');
console.log(typeof user1);
console.log(user1.name);
console.log(user2.name);

console.log(user1.hello()); // . cherche dans l'objet et trouve pas hello, donc il cherche dans le prototype

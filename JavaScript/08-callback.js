const prenoms = ['Romain', 'Sara', 'Amine'];

// un callback est une fonction qu'on défini
// mais qu'on n'appel pas directement
// une autre fonction l'appelera (ici forEach)

function hello(name) {
  console.log(`Hello ${name.toUpperCase()}`);
}

prenoms.forEach(hello);

// prenoms.forEach((name) => {
//   console.log(`Hello ${name.toUpperCase()}`);
// });
console.log('Fin de fichier');

// pile d'appel
// ^
// |
// |[log  ][log  ][log  ]
// |[hello][hello][hello]
// |[forEach            ][log]
// +-------------------------------->
//  Rom    Sara   Amine  Fin de fichier

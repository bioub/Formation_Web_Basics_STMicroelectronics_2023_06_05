const sub = function(a, b) {
  return a - b;
};

const prenoms = ['Romain', 'Sara', 'Amine'];

prenoms.forEach(function(el) {
  console.log(`Hello ${el}`);
});

// Bonne pratique dans ce cas
// Utiliser les fonctions fléchés (ES6)
prenoms.forEach((el) => {
  console.log(`Hello ${el}`);
});

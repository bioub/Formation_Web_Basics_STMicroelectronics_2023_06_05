const prenoms = ['Romain', 'Sara', 'Amine'];

function hello(name = '') {
  return `Hello ${name.toUpperCase()}`;
}

for (const prenom of prenoms) {
  console.log(hello(prenom));
}

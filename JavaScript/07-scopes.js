globalThis.globarVar = 'globarVar';

// selon la manière dont on charge le fichier
// la portée ici peut être :
// une fonction (closure)
// globale
// module (accessible uniquement par le fichier)
const fileVar = 'fileVar';

function externe() {
  const closureVar = 'closureVar'
  function interne() {
    const localVar = 'localVar';
    if (true) {
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(fileVar);
      console.log(globarVar);
    }
  }
  interne()
}
externe()

// importe l'API readline de Node.js
const readline = require('readline');

// configure readline pour le faire lire sur le clavier et écrire dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  // demande à readline d'afficher une question, et de récupérer la réponse
  // en asynchrone
  rl.question('Quel est le nombre ? ', (answer) => {
    console.log('Votre réponse : ' + answer);

    // answer est de type string, à vous de le convertir en number

    // rejouer :
    jouer();

    // libérer les ressources et quitter le programme :
    // rl.close();
  });

}

// CTRL-C pour killer le programme si besoin
jouer();

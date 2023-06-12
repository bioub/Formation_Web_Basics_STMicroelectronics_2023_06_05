function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// importe l'API readline de Node.js
const readline = require("readline");

// configure readline pour le faire lire sur le clavier et écrire dans le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const entierAlea = getRandomInt(0, 100);
const essais = [];

function jouer() {
  // si le tableau est rempli :
  if (essais.length) {
    console.log(`Vous avez déjà saisi : ${essais.join(' - ')}`);
  }

  // demande à readline d'afficher une question, et de récupérer la réponse
  // en asynchrone
  rl.question("Quel est le nombre ? ", (answer) => {
    console.log("Votre réponse : " + answer);

    // answer est de type string, à vous de le convertir en number
    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log("Erreur : il faut saisir un nombre");
      // rejouer :
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log("Trop petit");
      // rejouer :
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log("Trop grand");
      // rejouer :
      jouer();
    } else {
      console.log("C'est gagné");
      // libérer les ressources et quitter le programme :
      rl.close();
    }
  });
}

// CTRL-C pour killer le programme si besoin
jouer();



// pile d'appel
// ^
// |
// |                              [question]              [question]
// |[question]                    [jouer   ]              [jouer   ]                        [log]
// |[jouer   ] ..⟳..              [=>      ] ..⟳..        [=>      ] ..⟳..
// +----------------------------------------------------------------------------------------------------->
//

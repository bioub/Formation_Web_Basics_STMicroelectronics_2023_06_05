const Random = {
  getRandom() {
    return Math.random();
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  },
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  },
};

// importe l'API readline de Node.js
const readline = require("readline");

class Jeu {
  constructor(options = {}) {
    const min = options.min ?? 0; // (ES2020) si options.min vaut null ou undefined on active la valeur de droite
    const max = options.max ?? 100;

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.entierAlea = Random.getRandomInt(min, max);
    this.essais = [];
  }
  jouer() {
    // si le tableau est rempli :
    if (this.essais.length) {
      console.log(`Vous avez déjà saisi : ${this.essais.join(" - ")}`);
    }

    // demande à readline d'afficher une question, et de récupérer la réponse
    // en asynchrone
    this.rl.question("Quel est le nombre ? ", (answer) => {
      console.log("Votre réponse : " + answer);

      // answer est de type string, à vous de le convertir en number
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log("Erreur : il faut saisir un nombre");
        // rejouer :
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log("Trop petit");
        // rejouer :
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log("Trop grand");
        // rejouer :
        this.jouer();
      } else {
        console.log("C'est gagné");
        // libérer les ressources et quitter le programme :
        this.rl.close();
      }
    });
  }
}


const game = new Jeu({
  max: 20
});
game.jouer();

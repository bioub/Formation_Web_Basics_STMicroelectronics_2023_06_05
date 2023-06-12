class User {
  constructor(name) {
    this.name = name;
  }
  // hello() {
  //   setTimeout(function() {
  //     console.log(this);
  //     console.log(`Hello ${this.name}`);
  //   }, 999);
  // }
  hello() {
    setTimeout(() => {
      console.log(this);
      console.log(`Hello ${this.name}`);
    }, 999);
  }
}

const romain = new User('romain');
romain.hello();

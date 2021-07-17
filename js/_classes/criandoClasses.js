// Criando classes - os prototypes são automaticos

class People {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // métodos
  sayHello() {
    console.log(`${this.name} say hello!!`);
  }
}

const person01 = new People('Rafael', 29, 'male');
console.log(person01);
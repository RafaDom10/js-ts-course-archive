// Função construtora -> objetos, e Sempre iniciar com letra maiuscula -> Car()
// Função factory -> objetos

function Person(name, lastname) {
  // atributos ou métodos privados - não estarão disponiveis apartir de person.algumacoisa
  const ID = 12345;
  const internMethod = () => {
  };

  // Atributos ou métodos publicos
  this.name = name;
  this.lastname = lastname;
  this.method = () => {
    console.log('I\'m a method');
  };
}

const person = new Person('Rafael', 'Domingues');
console.log(person.name);
person.method();
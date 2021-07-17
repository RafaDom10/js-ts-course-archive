// Criando objeto literal

const person = {
  name: 'Jane',  // pares de chave e valor key -> name, value -> 'Jane'.
  surname: 'Doe',
  age: 30,
};
console.log(person.name);  // acessando o valor contido na chave name.
console.log(person['surname']);  // acessando o valor contido na chave name (colchetes).

// Outra maneira para acessar
const key = 'surname';
console.log(person[key]); // acessando dinâmicamente


// Criando Objeto com o construtor do Objeto
const car = new Object();
// passando chaves e valores para esse objeto
car.model = 'Civic';
car.manufacturer = 'Honda';
car.price = 29999;
car.priceWithTax = (tax) => car.price * tax; // método do objeto
console.log(car.priceWithTax(1.6));
console.log(car);

// Deletando uma chave/valor
delete car.manufacturer;
console.log(car);


// Iterando sobre objetos

// Obtendo as chaves
for (let key in person) {
  console.log(key);
}
// Obtendo os valores
  for (let key in person) {
    console.log(person[key]);
  }


  // Funções fabrica (Factory function)

  function client(name, lastName, age) {
    return {
      name,
      lastName,
      age,
      get fullName() {  // utilizando o get .. uma função se comporta como um atributo
        return `Full Name: ${name} ${lastName}`;
      }
    }
  }

const client01 = client('Rafael', 'Domingues', 29);
console.log(client01.fullName);  // acessa a função como se fosse um atributo


// Função construtora (Constructor function) - (porém no ES6 é usado com a sintaxe de class)

function Player(name, shirtNumber, team) {  // nome sempre em maiúsculo
  this.name = name;
  this.shirtNumber = shirtNumber;
  this.team = team;
}

const player01 = new Player('James', 23, 'Lakers');

// Travando um objeto (congelando) -> impossibilidade a mudança das propriedades do objetos, bem como criar novas
Object.freeze(player01);
player01.name = 'Jamal'; // não surgira efeito

// podemos também travar a função criadora em si, para não necessitar travar obj por obj
function Product(name, price) {
  this.name = name;
  this.price = price;

  Object.freeze(this);  // basta congelar o this
}
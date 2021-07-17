// Factory functions -> funções que retorna objetos

function createPerson(name, lastname) {
  return {
    name, lastname
  };
}

const p1 = createPerson('Rafael', 'Domingues');
console.log(p1);

// Factory function - funções dentro do obj -> métodos
function createCar(manufacturer, model, price, tax) {
  return {    
    manufacturer,
    model,
    price,
    tax,
    // priceWithTax() {
    //   return `Price with tax: ${(tax * price).toFixed(3)}`;
    // }

    //Getter - transformando a function em um atributo, basta acrescentar get na frente
    get priceWithTax() {
      return `Price with tax: ${(tax * price).toFixed(3)}`;
    }
  }
}

const car = createCar('honda', 'civic', 20.900, 1.2);
const car2 = createCar('m3', 'bmw', 32.900, 1.6);
console.log(car.model, car.manufacturer, car.priceWithTax);
console.log(car2.model, car2.manufacturer, car2.priceWithTax);
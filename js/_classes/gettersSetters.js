// Exemplo de utilização de getters and setters

//utilizando symbol -> a propriedade symbol não pode ser acessado externamente
const _speed = Symbol();

class Car {
  constructor(model) {
    this.model = model;
    this[_speed] = 0;
  }

  // criando um setter para mudar a velocidade manualmente
  set speed(value) {
    if(typeof value !== 'number') return;
    if(value >= 120 || value <= 0) return;
    this[_speed] = value;
  }

  // criando um getter para ter acesso ao atributo _speed
  get speed() {
    return this[_speed];
  }

  accelerate() {
    if (this[_speed] >= 120) return;
    this[_speed]++;
  }
  
  break() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}
 
const car01 = new Car('Civic');
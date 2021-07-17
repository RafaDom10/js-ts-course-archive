// Trabalhando com herança em classe

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }
    this.ligado = true;
  }

  desligar() {
    if (this.ligado) {
      console.log(`${this.nome} já está desligado`);
      return;
    }
    this.ligado = false;
  }
}



// Criando uma nova classe com herança da classe DispositivoEletronico

class Smartphone extends DispositivoEletronico {
  // adicionando novos atributos a classe alem das que foram herdadas
  constructor(nome, cor, modelo) {
    super(nome); // propriedades herdadas

    this.cor = cor;
    this.modelo = modelo;
  }

  // podemos alterar o método que recebeu por herança overwrite
  ligar() {
    console.log('Liguei Teste');
  }
}

const smartphone01 = new Smartphone('Iphone', 'vermelho', 'xr');

console.log(smartphone01)
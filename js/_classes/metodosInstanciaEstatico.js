// Métodos estáticos estão presentes apenas na classe e não na instância

//classe
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // métodos de instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // método da classe -> static method (nota: os métodos estáticos não tem acesso aos dados da instância)
  static trocaPilha() {
    console.log('Pilhas trocadas com sucesso!');
  }
}

//instâcia
const controle01 = new ControleRemoto('LG');
controle01.aumentarVolume();
console.log(controle01);

// Acessando o  método static referente a classse
ControleRemoto.trocaPilha();
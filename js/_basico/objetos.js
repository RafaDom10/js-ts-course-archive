// Exmplos de objeto

// Criação literal de um objeto

const pessoa = {
  nome: 'Rafael',
  sobreNome: 'Domingues',
  idade: 29 
};

const pessoa2 = {
  nome: 'Ana',
  sobreNome: 'Macedo',
  idade: 27  
};

// acessando atributos do objeto

const nome = pessoa.nome;
const idade = pessoa.idade;
console.log(nome, idade);


// criando uma função criadora de objeto
function criaPessoa (nome, sobreNome, idade) {
  return { nome, sobreNome, idade }
}

const pessoa3 = criaPessoa('james', 'dom', 29);

console.log(pessoa3);


// funções dentro de objeto

const pessoa4 = {
  nome: 'Rafael',
  sobreNome: 'Domingues',
  idade: 29,

  hello() {
    console.log(`${this.nome} say hello!! age: ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }
}

pessoa4.hello();
pessoa4.incrementaIdade();
pessoa4.hello();
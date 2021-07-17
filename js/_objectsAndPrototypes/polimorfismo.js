// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if(this.saldo < valor) {
    console.log(`Saldo insuficiente! - Saldo: R$${this.saldo},`);    
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`Agencia: ${this.agencia} - Conta: ${this.conta} - Saldo: R$${this.saldo.toFixed(2)}`);
};



// Sobrescrevendo métodos para Conts Correte

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

// Linkando 
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Sobrescrevendo o método sacar
ContaCorrente.prototype.sacar = function (valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente! - Saldo: R$${this.saldo},`);    
    return;
  }
  
  this.saldo -= valor;
  this.verSaldo();
};

const contaCorrente01 = new ContaCorrente(11, 1234, 0, 500);



// Sobrescrevendo métodos para Conts Poupança

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca01 = new ContaPoupanca(12, 10120, 100);

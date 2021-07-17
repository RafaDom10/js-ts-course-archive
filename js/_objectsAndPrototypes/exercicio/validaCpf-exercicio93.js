/* 
CALCULO PARA VALIDAÇÃO CPF

cpf 407.547.458-56
4x 0x  7x  5x  4x  7x  4x   5x   8x  -> 9 primeiros digitos do cpf
10  9  8   7   6   5   4    3    2   -> multiplicadores
40  0  56  35  24  35  16   15   16  -> RESULTADO DA SOMA = 237

11 - (RESULTADO DA SOMA % 11) = 5   -> Resultado igual ao penultimo digito
11 - (291 % 11) = 5

4x  0x  7x  5x  4x  7x  4x   5x   8x  5x -> 10 primeiros digitos do cpf
11  10  9   8   7   6   5    4    3    2 -> multiplicadores
44  0   63  40  28  42  20   20   24  10 -> RESULTADO DA SOMA = 291

11 - (RESULTADO DA SOMA % 11) = 6  -> Resultado igual ao último digito, se o numero obtido for maior que 9, considerar 0
11 - (291 % 11) = 6

número de validação obtido = 56 -> dois útimos digitos do cpf

*/

// Resolução utilizando principios aprendidos na seção

function ValidaCpf(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCpf.prototype.valida = function () {
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  if(this.sequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  
  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((acc, curr) => {
    acc += (regressivo * Number(curr));
    regressivo--;
    return acc;
  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? '0' : String(digito);
};

ValidaCpf.prototype.sequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCpf('407.547.458-56');

if (cpf.valida()) {
  console.log('CPF Válido.')
} else {
  console.log('CPF Inválido.')
}
// Exemplos de if e else (condicionais)

const hora = 12;

if (hora <= 12) {
  console.log('Bom dia!');
} else if (hora > 12) {
  console.log('Boa tarde!');
}

// Com operadores ternários - se tiver mais de duas opções não é possível utilizar operadores ternários
hora <= 12 ? console.log('Bom dia!') : console.log('Boa tarde!');
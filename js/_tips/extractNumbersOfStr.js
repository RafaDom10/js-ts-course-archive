// Extraindo numeros de uma string

function extractNumbers(string) {
  return string ? string.replace(/\D/g, '') : string;
}

const cpf = extractNumbers('407.547.458-56');
console.log(cpf);  // nota: continua a ser uma string porem somente os numeros
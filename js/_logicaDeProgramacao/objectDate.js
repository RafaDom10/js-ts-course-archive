// Exemplos de utilização Object Date

// instanciando uma data
const data = new Date();  // cria uma variavel data com a data atual
console.log(data.toString());

// Setando uma data
const data1 = new Date(2020, 5, 19, 15, 30, 00); // (ano, mes-1, dia, hora, minuto, segundo)
console.log(data1.toString());

// String de data
const data2 = new Date('2020-06-19 13:30:00');
console.log(data2.toString());

// Extraindo o dia / mes / ano / hora / min / sec - da variavel data2
const dia = data2.getDate();
const mes = data2.getMonth() + 1; // Mês começa do zero
const ano = data2.getFullYear();
const hora = data2.getHours();
const min = data2.getMinutes();
const sec = data2.getSeconds();
const diaSemana = data2.getDay(); // 0 -> domingo..... sexta -> 5

console.log(`Dia ${dia}, Mês ${mes}, Ano ${ano}, hora ${hora}, min ${min}, Segundos ${sec}, Dia da semana ${diaSemana}`);


// Criando um função que formata uma data
function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// Função para colocar zero a esquerda
function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);
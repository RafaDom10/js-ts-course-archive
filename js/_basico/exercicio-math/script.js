const string = prompt('Digite um número: ');
const number = Number(string);

const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = number;

const texto = document.getElementById('texto');
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(number, 2)}<br/>
  ${number} é inteiro: ${Number.isInteger(number)}<br/>
  É NaN: ${Number.isNaN(number)}<br/>
  Arredondando para baixo: ${Math.floor(number)}<br/>
  Arredondando para cima: ${Math.ceil(number)}<br/>
  Com duas casas decimais: ${number.toFixed(2)}<br/></p>`
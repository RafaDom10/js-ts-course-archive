// Capturar evento de submit de formulario - criaremos uma função para cada parte do projeto
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }  

  const imc = getImc(peso, altura);
  const indiceImc = getIndiceImc(imc);

  const msg = `Seu IMC é ${imc} (${indiceImc}).`;

  setResultado(msg, true);
});


// Função para obter indice de massa corporal
function getIndiceImc(imc) {
  const indice = ['Abaixo do peso', 'Peso normal', 
  'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 
  'Obesidade grau 3'];

  if (imc >= 39.9) return indice[5];
  if (imc >= 34.9) return indice[4];
  if (imc >= 29.9) return indice[3];
  if (imc >= 24.9) return indice[2];
  if (imc >= 18.5) return indice[1];
  if (imc < 18.5) return indice[0];
}


//função calcula imc
function getImc(peso, altura) {
  const imc = peso / Math.pow(altura, 2);
  return imc.toFixed(2);
}

// Função criadora de paragrafo
function criaP() {
  const p = document.createElement('p');
  return p;
}

// função que cria o resultado
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; 

  const p = criaP();

  //cria uma classe
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }
  //seta a menssagem no paragrafo
  p.innerHTML = msg;
  // inseri o paragrafor p como filho .. no caso na <div>
  resultado.appendChild(p);
}
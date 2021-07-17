function calcImc() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  function recebeEventoForm(event) {
    event.preventDefault();

    const pesoString = document.querySelector('#input-peso');
    const alturaString = document.querySelector('#input-altura');    

    const peso = Number(pesoString.value);
    const altura = Number(alturaString.value);

    const imc = (peso / Math.pow(altura, 2)).toFixed(2);

    if (imc < 18.5) {
      resultado.innerHTML = `IMC: ${imc} - Abaixo do peso.`;
    } else if (18.5 < imc && imc < 24.9) {
      resultado.innerHTML = `IMC: ${imc} - Peso normal.`;
    } else if (25 < imc && imc < 29.9) {
      resultado.innerHTML = `IMC: ${imc} - Sobrepeso.`;
    } else if (30 < imc  && imc < 34.9) {
      resultado.innerHTML = `IMC: ${imc} - Obesidade grau 1.`;
    } else if (35 < imc && imc < 39.9) {
      resultado.innerHTML = `IMC: ${imc} - Obesidade grau 2.`;
    } else if (imc > 40) {
      resultado.innerHTML = `IMC: ${imc} - Obesidade grau 3.`;
    }

  }

  form.addEventListener('submit', recebeEventoForm);

}

calcImc();
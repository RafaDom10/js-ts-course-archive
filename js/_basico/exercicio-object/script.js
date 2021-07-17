// Exercio salva dados, criando um objeto apartir de dados enviados de um form

function meuEscopo () {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm (event) {
    event.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const altura = form.querySelector('.altura');
    const peso = form.querySelector('.peso');

    const objetoPessoas = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value
    }

    pessoas.push(objetoPessoas);

    /* 
    podemos também adicionar um objeto direto no array

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      altura: altura.value,
      peso: peso.value
    })

    */

    resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}, 
      Altura: ${altura.value}, Peso: ${peso.value}</p>`;

    console.log(pessoas);
  }

  form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();
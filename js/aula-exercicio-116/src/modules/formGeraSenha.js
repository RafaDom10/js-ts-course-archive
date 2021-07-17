import geraSenha from './gerador';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.quantidade-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerar = document.querySelector('.gerar-senha');

export default () => {
  btnGerar.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMinusculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  if (qtdCaracteres.value > 20) {
    return 'Limite Max de 20 caracteres!'
  }

  return senha || 'Nenhuma opção selecionada!';
}
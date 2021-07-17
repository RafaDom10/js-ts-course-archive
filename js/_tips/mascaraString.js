/* 
Normalmente armazenamos no banco de dados
apenas os números de informações como telefone 
e CPF e, quando exibimos para os usuários, é 
interessante manter estes dados formatados.
*/

function mask(value, pattern) {
  let i = 0;
  const v = value.toString();

  return pattern.replace(/#/g, () => v[i++] || '');
}

const masked = mask('41997899089', '(##) #####-####');
console.log(masked); //(41) 99789-9089
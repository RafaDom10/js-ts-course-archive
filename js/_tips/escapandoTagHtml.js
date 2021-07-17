/* 
Quando estamos recebendo inputs de usuários, 
principalmente quando estes valores serão exibidos
em tela em algum momento, precisamos nos atentar à 
segurança da nossa aplicação!
Com uma função simples para escapar tags HTML conseguimos
blindar nossa aplicação contra injects de códigos JavaScript 
que podem desde criar redirects indesejados a até mesmo roubo de dados!
*/

function escapeHTML(text) {
  const replacements = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
  };

  return text.replace(/[<>&"]/g, char => replacements[char]);
}

const userInput = "<script>alert('Tentando fazer um inject')</script>";

console.log(escapeHTML(userInput)); // &lt;script&gt;alert('Tentando fazer um inject')&lt;/script&gt;
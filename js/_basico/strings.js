// manipulações com uma string - há muitos metodos/funções basta acrescentar '.' exemplo umaString.'metodos'

let umaString = 'Um texto';
let umaString2 = ' Qualquer';
let umaString3 = 'O rato roeu a roupa do rei de roma';

// Acessando um caracter
console.log(umaString[0]); // -> U
// ou
console.log(umaString.charAt(0)); // -> U

// Concatenação de string
console.log(umaString + umaString2);
// ou
console.log(umaString.concat(umaString2 + ' exemplo'));

// Indice
console.log(umaString.indexOf('Um'));
// o Indice se da apartir da primeira letra da 'palavra' no caso -> U = 0

// Encontrar / substituir / tamanho .. etc
console.log(umaString.match(/[a-z]/g)); // regex de letras minusculas de a-z
console.log(umaString.search('x')); // retorna o index da letra x
console.log(umaString.replace('Um', 'Outro'));  // substitui a string porem não afeta a original
console.log(umaString.length); // retorna o tamanho da string inclui espaços
console.log(umaString3.slice(2, 6)); // irá cortar a string -> resultado 'rato', lembrando q o ultimo indice não entra.
console.log(umaString3.split(' ')); // divide uma string por um carcacter em especial
console.log(umaString3.toUpperCase()); // passa tudo para letra maiuscula
console.log(umaString3.toLowerCase()); // passa tudo para letra minuscula
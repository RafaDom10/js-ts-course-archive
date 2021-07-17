// Usar javascript para escrever no body html

/* 
seu nome é: x
seu nome tem x letras
a segunda letra do seu nome é : x

O primeiro indice da letra a do seu nome?
O ultimo indice da letra a no seu nome?
as ultimas 3 letras do seu nome são: x
as palavras do seu nome são: x
seu nome com letra maiusculas: x
seu nome com letras minúsculas: x
*/

const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong><br />`;

const segundaLetra = nome[1];
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${segundaLetra.toUpperCase()}</strong><br />`;

const nomeLength = nome.replace(/\s/g,'').length;
document.body.innerHTML += `O seu nome tem: <strong>${nomeLength}</strong> letras<br />`;

const indiceFirstA = nome.toLocaleLowerCase().indexOf('a') + 1;
document.body.innerHTML += `O primeiro indice da letra A no seu nome é: <strong>${indiceFirstA}</strong><br />`;

const indiceLastA = nome.lastIndexOf('a') + 1;
document.body.innerHTML += `O último indice da letra A no seu nome é: <strong>${indiceLastA}</strong><br />`;

const last3 = nome.slice(-3);
document.body.innerHTML += `As últimas 3 letras do seu nom é: <strong>${last3}</strong><br />`;

const palavrasNome = nome.split(' ');
document.body.innerHTML += `As palavras do seu nome são: <strong>${palavrasNome}</strong><br />`;

const nomeUpper = nome.toUpperCase();
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nomeUpper}</strong><br />`;

const nomeLower = nome.toLowerCase();
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nomeLower}</strong><br />`;

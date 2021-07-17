/* 
Escreva uma função chamada ePaisagem que recebe dois argumentos,
largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem 
*/

function ePaisagem(largura, altura) {
  return largura > altura ? true : false;
}

console.log(ePaisagem(700,1200))


//refatorando
const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(1200,300))


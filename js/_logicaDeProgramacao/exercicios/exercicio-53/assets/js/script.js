const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

// pegando todos os stilos computados na tag body
const stylesBody = getComputedStyle(document.body);
// selecionando apenas o backgraundColor
const backgraundColorBody = stylesBody.backgroundColor;

// iterando para mudar o backgroundcolor de todas as tag <p>
for (let p of ps) {
  p.style.backgroundColor = backgraundColorBody; // acessando o style do <p> e mudando o backgroundColor
  p.style.color = '#ffff';
  p.style.fontWeight = 'bold';
}

// no JS os nomes da propriedade do css é em camel case ex: css: font-family -> JS: fontFamily
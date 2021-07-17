// Funções recursivas ela mesmo se 'chama'

const recursive = (max) => {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursive(max);
};

recursive(0);
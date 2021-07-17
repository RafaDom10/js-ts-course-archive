// Exemplo de ordenação de um array de objs, ordenando do maior score para o menor

const users = [
  { users: 'Ness', score: 96 },
  { users: 'Sono', score: -9999 },
  { users: 'Daniel Paladino', score: 10000000000 },
  { users: 'Windy of Tenebra', score: -100 },
];

const rank = users.sort((a, b) => {
  if (a.score < b.score) return 1;
  if (a.score > b.score) return -1;
  return 0;
});

console.log(rank);
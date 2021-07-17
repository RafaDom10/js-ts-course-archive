// Obter o maior e o menor número de um array

const numbers= [7, 890, -233, 789, 2334, 43, -937];

const higher = Math.max.apply(Math, numbers);
const lower = Math.min.apply(Math, numbers);

console.log(`${higher}, ${lower}`);
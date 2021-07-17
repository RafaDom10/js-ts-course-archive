// Método some() -> alguns dos elementos do array passa pela regra.

const numbers = [1, 5, -3, 8];
const hasNegative = numbers.some(number => number < 0); // -> true

const users = [
  { name: 'Rafael', role: 'guest' },
  { name: 'Scott', role: 'member' },
];

const hasAdmin = users.some(user => user.role === 'admin'); // -> false
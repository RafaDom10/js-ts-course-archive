// Exemplos de concatenção de arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const arrayConct = array1.concat(array2, array3, 10, [11, 12, 13, 14, 15]); // aceita mais paraetros isolados ou novo array literal
console.log(arrayConct);

// Concatenando com o spread operator
const arraySpread = [...array1, ...array2, ...array3, 10, ...[11, 12, 13, 14, 15]];
console.log(arraySpread);
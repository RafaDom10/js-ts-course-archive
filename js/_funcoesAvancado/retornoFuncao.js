// return -> retorna um valor e termina a função

function createMultiplier(multiplier) {
  return function(n) {
    return n * multiplier;
  }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(2), triple(2), quadruple(2));
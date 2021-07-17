// queremos limpar os dados nulos (0, null, NaN e undefined) de um array.

const data = [2, 'a', 0, {}, null, [],, NaN, undefined, 'b'];

const fintered = data.filter(Boolean);  // Boolean -> true

console.log(fintered); // [ 2, 'a', {}, [], 'b' ]
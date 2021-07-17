// Exemplo de utilização Object Map().

const people = [
  { id: 3, name: 'Jon' },
  { id: 2, name: 'Raf' },
  { id: 1, name: 'Ann' },
];

const newPeople = new Map();

for (const person of people) {
  const { id } = person;

  newPeople.set(id, { ...person });  // para setar valores no Map set()
}

console.log(newPeople);

// Para obter os valores get()

console.log(newPeople.get(2));

// Iterando sobre Map ele devolve um array

for (const person of newPeople) {
  console.log(person);
}

// ou

for (const [identifier, { id, name }] of newPeople) {
  console.log(identifier, name);
  console.log(identifier, id);
}

// iterando sobre as keys
  for (const key of newPeople.keys()) {
    console.log(key);    
  }

// iterando sobre os values
  for (const value of newPeople.values()) {
    console.log(value);    
  }

  // deletando
  newPeople.delete(2); // deletando a key 2
  console.log(newPeople);
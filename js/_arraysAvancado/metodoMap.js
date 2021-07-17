// map retorna um novo array 

// Ex.

const people = [
 { name: 'Rafael', age: 30 },
 { name: 'Ana', age: 30 },
];

console.log(people);

const peopleWithId = people.map((person, index) => {
  person.id = index;
  return person;
});

console.log(peopleWithId);
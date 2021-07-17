// Saber se um elemento esta dentro de um array ou texto existente dentro de uma string de texto.

const string = 'Hello World with JavaScript!';

const checkString = string.includes('with JavaScript'); // -> true
// É case sensitive
const checkString = string.includes('with javaScript'); // -> false

// Tabém funciona com arrays
const allowedRoles = ['admin', 'user', 'guest'];

const user1Role = 'admin';
const allowUser1Access = allowedRoles.includes(user1Role); // -> true

const user2Role = 'staff';
const allowUser2Access = allowedRoles.includes(user2Role); // -> false
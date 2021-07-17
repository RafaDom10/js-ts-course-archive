/* Basicamente uma closure é uma
 função que é criada dentro do escopo 
 de outra função, dessa forma, tendo 
 acesso e usando os dados que foram 
 criados no escopo da primeira! */

 // Exemplo

 function sayHello(name) {
   const message = `Hello ${name}`;

   function say() {
     alert(message);
   }

   say();
 }

 sayHello('Rafael');
// const firstName = 'Rafael';
// const surname = 'Domingues';

// const sayName = () => console.log(`${firstName} ${surname}`);

// // Exportando
// module.exports = { sayName, firstName, surname};

const Obj = {
  'name': 'Rafael',
  'surname': 'Domingues',

  sayname() {
    return `${this.name} ${this.surname}`;
  }
}

module.exports = Obj;
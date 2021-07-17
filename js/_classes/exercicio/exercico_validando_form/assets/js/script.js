
class ValidateForm {
  constructor() {
    this.form = document.querySelector('.form');    
    this.events();
  }

  events() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validField = this.checkFields();
  }

  checkFields() {
    let valid = true;
    
    for(let errorMessage of this.form.querySelectorAll('.error-message')) {
      errorMessage.remove();
    }

    for(let field of this.form.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;

      if(!field.value) {
        this.createError(field, `The field "${label}" cannot be empty`);
        valid = false;
      }

      if(field.classList.contains('cpf')) {
        if(!this.validatesCpf(field)) valid = false;
      }
    }
  }

  validatesCpf(field) {
    const cpf = new ValidateCPF(field.value);

    if(!cpf.validate()) {
      this.createError(field, 'CPF Invalid!');
      return false;
    }

    return true;
  }

  createError(field, message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    div.classList.add('error-message');
    field.insertAdjacentElement('afterend', div);
  }
}

const valid = new ValidateForm();
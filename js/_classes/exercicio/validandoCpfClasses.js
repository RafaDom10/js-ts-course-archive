
class ValidateCPF {
  constructor(inputCPF) {
    Object.defineProperty(this, 'clearedCPF', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: inputCPF.replace(/\D+/g, ''),
    });
  }

  isSequencial() {
    return this.clearedCPF.charAt(0).repeat(this.clearedCPF.length) === this.clearedCPF;
  }

  generateNewCPF() {
    const cpfWithoutDigit = this.clearedCPF.slice(0, -2);
    const firstDigit = this.generateDigit(cpfWithoutDigit);
    const secondDigit = this.generateDigit(cpfWithoutDigit + firstDigit);
    this.generateNewCPF = cpfWithoutDigit + firstDigit + secondDigit;
  }

  generateDigit() {
    let total = 0;
    let reverse = this.cpfWithoutDigit.length + 1;
    for (let stringCPF of cpfWithoutDigit) {
      total += reverse * Number(stringCPF);
      reverse--;
    }
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validate() {
    if(!this.clearedCPF) return false;
    if(this.clearedCPF.length !== 11) return false;
    if(this.isSequencial()) return false;
    this.generateNewCPF();
    return this.newCPF === this.clearedCPF;
  }
}


export default class ValidateCPF {
  constructor(inputCPF) {
    Object.defineProperty(this, 'clearedCPF', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: inputCPF.replace(/\D+/g, ''),
    });
  }

  isSequencial() {
    return this.clearedCPF.charAt(0).repeat(11) === this.clearedCPF;
  }

  generateNewCPF() {
    const cpfWithoutDigit = this.clearedCPF.slice(0, -2);
    const firstDigit = ValidateCPF.generateDigit(cpfWithoutDigit);
    const secondDigit = ValidateCPF.generateDigit(cpfWithoutDigit + firstDigit);
    this.generateNewCPF = cpfWithoutDigit + firstDigit + secondDigit;
  }

  static generateDigit(cpfWithoutDigit) {
    let total = 0;
    let reverse = cpfWithoutDigit.length + 1;

    for (let stringCPF of cpfWithoutDigit) {
      total += reverse * Number(stringCPF);
      reverse--;
    }
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validate() {
    if(!this.clearedCPF) return false;
    if(typeof this.clearedCPF !== 'string') return false;
    if(this.clearedCPF.length !== 11) return false;
    if(this.isSequencial()) return false;
    this.generateNewCPF();
    return this.newCPF === this.clearedCPF;
  }
}

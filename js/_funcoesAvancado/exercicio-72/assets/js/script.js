// utilizando factory function apenas como aprendizado

(() => {

  function createCalculator() {
    return {
      display: document.querySelector('.display'),

      start() {
        this.btnClick();
        this.pressEnter();
      },

      btnForDisplay(value) {
        this.display.value += value;
      },

      clearDisplay() {
        this.display.value = '';
      },

      deleteOne() {
        this.display.value = this.display.value.slice(0, -1);
      },

      calculate() {
        let operation = this.display.value;
        try {
          operation = eval(operation);
          if (!operation) {
            alert('Operation invalid');
            return;
          }
          this.display.value = String(operation);
        } catch (e) {
          alert('Operation invalid');
          return;
        }
      },

      pressEnter() {
        this.display.addEventListener('keypress', (e) => {
          if (e.keyCode === 13) {
            this.calculate();
          }
        });
      },

      btnClick() {
        document.addEventListener('click', (e) => {
          const el = e.target;
          if (el.classList.contains('btn-num')) {
            this.btnForDisplay(el.innerText);
          }
          if (el.classList.contains('btn-clear')) {
            this.clearDisplay();
          }
          if (el.classList.contains('btn-del')) {
            this.deleteOne();
          }
          if (el.classList.contains('btn-eq')) {
            this.calculate();
          }
          this.display.focus();
        }); // arrow function não permitiria o bind(this), não é necessário utilizalo com arrow.
      }
    };
  }

  const calculator = createCalculator();
  calculator.start();

})();
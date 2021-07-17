function chronometer() {

  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  const chronometer = document.querySelector('.chronometer');
  /* const start = document.querySelector('.start');
  const stop = document.querySelector('.stop');
  const reset = document.querySelector('.reset'); */
  let seconds = 0;
  let timer;

  function startChronometer() {
    timer = setInterval(function () {
      seconds++;
      chronometer.innerHTML = getTimeFromSeconds(seconds);
    }, 1000)
  }

  /*
  
  start.addEventListener('click', function (event) {
    chronometer.classList.remove('stoped');
    clearInterval(timer);
    startChronometer()
  });
  
  stop.addEventListener('click', function (event) {
    clearInterval(timer);
    chronometer.classList.add('stoped');
  });
  
  reset.addEventListener('click', function (event) {
    chronometer.classList.remove('stoped');
    clearInterval(timer);
    chronometer.innerHTML = '00:00:00';
    seconds = 0;
  });
  
  */


  // refatorando

  document.addEventListener('click', function (event) {
    const element = event.target;

    if (element.classList.contains('start')) {
      chronometer.classList.remove('stoped');
      clearInterval(timer);
      startChronometer()
    }

    if (element.classList.contains('stop')) {
      clearInterval(timer);
      chronometer.classList.add('stoped');
    }

    if (element.classList.contains('reset')) {
      chronometer.classList.remove('stoped');
      clearInterval(timer);
      chronometer.innerHTML = '00:00:00';
      seconds = 0;
    }
  })
}

chronometer();
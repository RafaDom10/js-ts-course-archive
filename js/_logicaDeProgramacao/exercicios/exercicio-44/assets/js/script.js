/* 
// PRIMEIRA FORMA

function dateNow() {

  const h1 = document.querySelector('.container h1');
  const date = new Date();

  function getDayName(dayNumber) {
    switch (dayNumber) {
      case 0:
        dayNumber = 'Sunday';
        return dayNumber;
      case 1:
        dayNumber = 'Monday';
        return dayNumber;
      case 2:
        dayNumber = 'Tuesday';
        return dayNumber;
      case 3:
        dayNumber = 'Wednesday';
        return dayNumber;
      case 4:
        dayNumber = 'Thursday';
        return dayNumber;
      case 5:
        dayNumber = 'Friday';
        return dayNumber;
      case 6:
        dayNumber = 'Saturday';
        return dayNumber;
      default:
        dayNumber = 'Invalid date';
        return dayNumber;
    }
  }

  function getMonthName(monthNumber) {
    switch (monthNumber) {
      case 0:
        monthNumber = 'January';
        return monthNumber;
      case 1:
        monthNumber = 'February';
        return monthNumber;
      case 2:
        monthNumber = 'March';
        return monthNumber;
      case 3:
        monthNumber = 'April';
        return monthNumber;
      case 4:
        monthNumber = 'May';
        return monthNumber;
      case 5:
        monthNumber = 'June';
        return monthNumber;
      case 6:
        monthNumber = 'July';
        return monthNumber;
      case 7:
        monthNumber = 'August';
        return monthNumber;
      case 8:
        monthNumber = 'September';
        return monthNumber;
      case 9:
        monthNumber = 'October';
        return monthNumber;
      case 10:
        monthNumber = 'November';
        return monthNumber;
      case 11:
        monthNumber = 'December';
        return monthNumber;
      default:
        monthNumber = 'Invalid date';
        return monthNumber;
    }
  }

  function formatZeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
  }


  function createDate(date) {
    const dayNumber = date.getDate();
    const dayNumberWeek = date.getDay();
    const monthNumber = date.getMonth();
    const yearNumber = date.getFullYear();

    const dayName = getDayName(dayNumberWeek);
    const monthName = getMonthName(monthNumber);

    return (`${formatZeroLeft(date.getHours())}:${formatZeroLeft(date.getMinutes())} 
      ${dayName}, ${monthName} ${dayNumber}, ${yearNumber}`);
  }

  h1.innerHTML = createDate(date);

}

dateNow(); 
*/


/* 
// SEGUNDA FORMA RESUMIDA

function dateNow() {
  const h1 = document.querySelector('.container h1');
  const date = new Date();
  h1.innerHTML = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
}

dateNow();
 */


// TERCEIRA FORMA MUDANDO A PRIMEIRA FORMA (REMOVENDO OS SWITCHS)
function dateNow() {

  const h1 = document.querySelector('.container h1');
  const date = new Date();

  function getDayName(dayNumber) {
    const days = ['Sunday','Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday'];
    
    return days[dayNumber];
  }

  function getMonthName(monthNumber) {
    const months = ['January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[monthNumber];
  }

  function formatZeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
  }


  function createDate(date) {
    const dayNumber = date.getDate();
    const dayNumberWeek = date.getDay();
    const monthNumber = date.getMonth();
    const yearNumber = date.getFullYear();

    const dayName = getDayName(dayNumberWeek);
    const monthName = getMonthName(monthNumber);

    return (`${formatZeroLeft(date.getHours())}:${formatZeroLeft(date.getMinutes())} 
      ${dayName}, ${monthName} ${dayNumber}, ${yearNumber}`);
  }

  h1.innerHTML = createDate(date);

}

dateNow();
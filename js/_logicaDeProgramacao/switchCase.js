// Exemplo da utilização do swicht/case

const date = new Date();
let dayOfWeek = date.getDay();  // sáida -> number

/* switch(dayOfWeek) {
  case 0:
    dayOfWeek = 'Sunday';
    break;
  case 1:
    dayOfWeek = 'Monday';
    break;
  case 2:
    dayOfWeek = 'Tuesday';
    break;
  case 3:
    dayOfWeek = 'Wednesday';
    break;
  case 4:
    dayOfWeek = 'Thursday';
    break;
  case 5:
    dayOfWeek = 'Friday';
    break;
  case 6:
    dayOfWeek = 'Saturday';
    break;
  default:
    dayOfWeek = 'Invalid date';
} */

console.log(dayOfWeek);


//Construindo uma função com o mesmo objetivo

function getDayOfWeek(dayOfWeek) {
  switch(dayOfWeek) {
    case 0:
      dayOfWeek = 'Sunday';
      return dayOfWeek;
    case 1:
      dayOfWeek = 'Monday';
      return dayOfWeek;
    case 2:
      dayOfWeek = 'Tuesday';
      return dayOfWeek;
    case 3:
      dayOfWeek = 'Wednesday';
      return dayOfWeek;
    case 4:
      dayOfWeek = 'Thursday';
      return dayOfWeek;
    case 5:
      dayOfWeek = 'Friday';
      return dayOfWeek;
    case 6:
      dayOfWeek = 'Saturday';
      return dayOfWeek;
    default:
      dayOfWeek = 'Invalid date';
      return dayOfWeek;
  }  
}

const day = getDayOfWeek(dayOfWeek);

console.log(day);
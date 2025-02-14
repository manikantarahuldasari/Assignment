//  Display Day of the Week (Switch Case)
function DayOfWeek(x){
    let day=x
switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      default:
        day="invalid"
  }
  return day
}

console.log(DayOfWeek(7))
function monthOfYear(monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`Month of the year is ${monthNumber}:January`);
      break;
    case 2:
      console.log(`Month of the year is ${monthNumber}:February`);
      break;
    case 3:
      console.log(`Month of the year is ${monthNumber}:March`);
      break;
    case 4:
      console.log(`Month of the year is ${monthNumber}:April`);
      break;
    case 5:
      console.log(`Month of the year is ${monthNumber}:May`);
      break;
    case 6:
      console.log(`Month of the year is ${monthNumber}:June`);
      break;
    case 7:
      console.log(`Month of the year is ${monthNumber}:July`);
      break;
    case 8:
      console.log(`Month of the year is ${monthNumber}:August`);
      break;
    case 9:
      console.log(`Month of the year is ${monthNumber}:September`);
      break;
    case 10:
      console.log(`Month of the year is ${monthNumber}:October`);
      break;
    case 11:
      console.log(`Mmonth of the year is ${monthNumber}:November`);
      break;
    case 12:
      console.log(`Month of the year is ${monthNumber}:December`);
      break;
    default:
      console.log(`Invalid month`);
      break;
  }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

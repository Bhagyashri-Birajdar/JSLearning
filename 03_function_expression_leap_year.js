var check_leap_year = function (leap_year) {
  if (
    leap_year <= 0 ||
    typeof leap_year != "number" ||
    leap_year == null ||
    leap_year == undefined
  )
    console.log("Invalid input");
  else {
    console.log("Any value with number data type is valid");
    if (leap_year % 4 == 0) 
    {
        console.log(`Leap year ${leap_year}`);
    }
    else 
    console.log(`Not leap year ${leap_year}`);
  }
};
check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);

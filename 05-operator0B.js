console.log("=====Check maleMarriageEligibility=====");
function maleMarriageEligibility(gender,age,boyname)
{
var result= (gender=="male" && age>=21) ? `Hey ${boyname}, you are eligible for marriage`:`Hey ${boyname}, you are not eligible for marriage`;
return result;
}
var result1 = maleMarriageEligibility("male",25,"Bill Gates");
console.log(result1);
var result1 = maleMarriageEligibility("male",17,"Steve Jobs");
console.log(result1);

console.log("======Check femaleMarriageEligibility=====");
function femaleMarriageEligibility(gender,age,girlname)
{
var result= (gender=="female" && age>=18) ? `Hey ${girlname}, you are eligible for marriage`:`Hey ${girlname}, you are not eligible for marriage`;
return result;
}
var result1 = femaleMarriageEligibility("female",16,"Jennifer");
console.log(result1);
var result1 = femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(result1);
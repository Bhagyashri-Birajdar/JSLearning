console.log("=====Chck TCS interview eligibility with no return value=====");
function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName)
{
var result= (gradScore>=70 || hscScore>=80 ||  sscScore>=90) ? `Congrats ${candidateName}, you are eligible for TCS interview`:`${candidateName},Unfortunately,you are not eligible for interview`
console.log(result,`,Bcoz you have ${gradScore},${hscScore},${sscScore} marks.`);
}
tcsInterviewEligibility(80,86,90,"Bhagyashri");
tcsInterviewEligibility(70,65,55,"Suraj");
tcsInterviewEligibility(60,79,88,"Shrikrishna");
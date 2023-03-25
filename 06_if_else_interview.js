console.log("=====Chck TCS interview eligibility with no return value=====");
function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName)
{
if(gradScore>=70 || hscScore>=80 ||  sscScore>=90)
{ console.log(`Congrats ${candidateName}, you are eligible for TCS interview`);
}else{
    console.log(`${candidateName},Unfortunately,you are not eligible for interview`);
}

}

tcsInterviewEligibility(80,86,90,"Bhagyashri");
tcsInterviewEligibility(70,65,55,"Suraj");
tcsInterviewEligibility(60,79,88,"Shrikrishna");
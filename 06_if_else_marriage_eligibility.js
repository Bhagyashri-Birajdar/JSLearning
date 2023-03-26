function marriageEligibilityChecker(gender,age)
{
    if(gender=="other" && age >=18){
    console.log(`As gender is other ,age for eligibility not defined`);
}
    else{
    if((gender=="male" && age>=21)|| (gender=="female" && age>=18))
    {
        console.log(`Gender is ${gender} and age is ${age},Eligible for marriage`);
    }else{
            console.log(`Gender is ${gender} and age is ${age},Not eligible for marriage`);
        
    }
}
}
marriageEligibilityChecker("male",17);
marriageEligibilityChecker("male",25);
marriageEligibilityChecker("female",28);
marriageEligibilityChecker("female",16);
marriageEligibilityChecker("other",35);
marriageEligibilityChecker("other",42);
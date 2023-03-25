console.log("==========Check vote eligibility==========");
function voteEligibility(age)
{
if(age<=0 && age==undefined && age==null && age>=120){
    console.log(`Given invalid data`);
}
    if(age>=18){
    console.log(`As age is ${age},he or she is eligible for voting`);
} else{
    console.log(`As age is ${age},he or she is not eligible for voting`);
}
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log("==========Grade System Designing==========");
function gradeCalculation(marks)
{ // if marks is 0 or less than 0 or greater than 100 or not in valid number format // ex. “56” or “Seventy” then log the msg→ Please provide the valid marks 
    if( marks > 100 || marks<=0 || (typeof marks!= "number"))
    { console.log(`Please provide the valid marks - ${marks}`);
} 
   if(marks>=90 && marks<100){
console.log(`Fantastic marks: ${marks},your grade is A+.`);
   }
   if(marks>=75 && marks<90){
    console.log(`Excellent marks: ${marks},your grade is A.`);
       }
       if(marks>=50 && marks<75){
        console.log(`Good marks: ${marks},your grade is B.`);
           }
           if(marks>=35 && marks<50){
            console.log(`Marks: ${marks},your grade is C.Need improvement.`);
               }
   }
 
 gradeCalculation(98);
 gradeCalculation(80);
 gradeCalculation(90);
  gradeCalculation(0); 
  gradeCalculation(150); 
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
   gradeCalculation("91"); 
   gradeCalculation("Seventy One"); 
   gradeCalculation(NaN);
   // gradeCalculation(undefined);
   // gradeCalculation(null);
   //x
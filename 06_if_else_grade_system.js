function gradeSystem(score)
{
    if(score>100 || score < 0 || (typeof score)!= 'number')
    {
        console.log(`Score is ${score},Invalid Input`);
    }
    if(score<35){
console.log(`Score is ${score},You are failed`);
    }
    if(score>=35 && score<60){
        console.log(`Score is ${score},passed and grade is C`);
    }
    
    if(score>=60 && score<75){
        console.log(`Score is ${score},passed and grade is B`);
    }

    if(score>=75 && score<=90){
        console.log(`Score is ${score},passed and grade is A`);
    }
    
    if(score>90 && score<=100){
        console.log(`Score is ${score},passed and grade is A+`);
    }
}
gradeSystem(66);
gradeSystem(13);
gradeSystem(98);
gradeSystem("");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem("fifty five");
gradeSystem(undefined);
gradeSystem(55);
gradeSystem(-20);
gradeSystem(82);
console.log("==========Step 1==========");
function checkEvenOrOdd(value)
{
    //var result = typeof value;
    //console.log(result);
    if(typeof value == "number"){
console.log(`Value ${value} with number data type is valid`);
if(value%2==0){
    console.log(` Even number`);

}else{
console.log(` Odd number`);
}
}
   else
    console.log(`Value ${value} with other data type is not valid`);
   
}
checkEvenOrOdd(2);
checkEvenOrOdd(45);
checkEvenOrOdd(13);
checkEvenOrOdd(0);
checkEvenOrOdd("70");


console.log("==========Step 2==========");

function greatestNumber(value1,value2,value3)
{
    if(typeof value1 == "number" && typeof value2 == "number" && typeof value3 == "number" ){
        console.log(`Values with number data type is valid`);
        if(value1>value2)
        {
            if(value1>value3)
            console.log(`${value1} is greatest among ${value2} and ${value3}.`);
            else
            console.log(`${value3} is greatest among ${value2} and ${value1}.`);   
        }
        else
        {
            if(value3<value2)
            console.log(`${value2} is greatest among ${value3} and ${value1}.`);
            else
            console.log(`${value3} is greatest among ${value2} and ${value1}.`);
        }
    }
        else
        console.log(`Values with other data type is not valid.`);
        }



greatestNumber(56,70,80);
greatestNumber(-20,-90,0);
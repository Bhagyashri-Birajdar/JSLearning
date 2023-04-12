
function doAssignment(callback)
{
    console.log("Solving Assignments");
    console.log("step 1 to 10 all are solved now");
    callback();
}
function copyAssignment()
{
    console.log("Thank u ajju,Let me copy Asignment");
    console.log("Oh ,finlly copied ass assignments");
}
doAssignment(copyAssignment);

function greet()
{
    console.log("Good Morning");

}
setTimeout(greet,4000);

function firstClass()
{ 
    console.log("We can return function from another function"); 
    function innerFunction(){           // return function(){
        console.log("Inner function"); // console.log("Inner function");
}                                       // }
  return innerFunction;                 // return innerFunction; 
}
 const inner = firstClass();
  inner();
function fibonacci(fabterm){
let first = 0;
let second = 1;
    let next =0;
    console.log(`Fibonacci series:`);
for(let index=1;index<=fabterm;index++)
{
    console.log(first);
  next = first + second;
  first = second;
  second = next;
}
    }  
fibonacci(7);


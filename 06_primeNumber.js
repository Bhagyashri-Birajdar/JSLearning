function isPrime(num){
    
 for(let index=2; index<num; index++)
    {if(num%index ==0){
        return false;
    }
  }
return true;
}


console.log(`Is 7 Prime Number: ${isPrime(7)}`);
console.log(`Is 6 Prime Number: ${isPrime(6)}`);
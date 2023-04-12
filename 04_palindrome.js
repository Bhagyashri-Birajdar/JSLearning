function palindromeWord(str){

var lengthOfStr = str.length;
console.log(`Length of string:${lengthOfStr}`);
for (let index = 0; index <= lengthOfStr; index++) {
   //const element = array[index];
if(str[index]!=str[lengthOfStr-1-index])
return "string is not palindrome";
else
return "string is palindrome";
    }

}
let result=palindromeWord('madam');
console.log(result);
console.log(palindromeWord('Even'));
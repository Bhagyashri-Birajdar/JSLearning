console.log(`============step 1===========`);
function squareOfWordLength(word)
{
    console.log(`The word is ${word}`);
    var wordLength=word.length;
    var squareOfWordlength=wordLength ** 2;
    console.log(`Length of word ${wordLength} Square of word length ${squareOfWordlength}`);
    return wordLength, squareOfWordlength;
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`============step 2===========`);
function angularDeveloper()
{
    var str="I am angular developer";
    console.log(`Given string is: ${str}`);
    var strLength = str.length;
console.log(`String length is ${strLength}`);  
    var splitResult=str.split(" ");  
console.log(splitResult);    
console.log(`Total number of words is: ${splitResult.length}`);   
console.log(`Division operation on string length and no of words: ${strLength/splitResult.length}`);
console.log(`Multiplication operation on string length and no of words: ${strLength*splitResult.length}`);
}
angularDeveloper();


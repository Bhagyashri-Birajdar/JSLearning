function factorialofWordsCount(str) {
  if (str == undefined || str == null || str == NaN) {
    console.log(`Entered string is not valid: ${str}`);
  } else {
    var splitResult = str.split(" ");
    var wordCount = splitResult.length;
    console.log(`Total no of words in string:${wordCount}`);
    let factorial = 1;
    {
      for (let index = wordCount; index >= 1; index--)
        factorial = factorial * index;
      return factorial;
    }
  }
}
var result = factorialofWordsCount("Revision is the mother of Success");
console.log(`Factorial of total word count is:${result}`);
var result = factorialofWordsCount("We never fail,we always learn");
console.log(`Factorial of total word count is:${result}`);
var result = factorialofWordsCount(null);
console.log(`Factorial of total word count is:${result}`);
var result = factorialofWordsCount("");
console.log(`Factorial of total word count is:${result}`);
var result = factorialofWordsCount("Bhagyashri Birajdar");
console.log(`Factorial of total word count is:${result}`);

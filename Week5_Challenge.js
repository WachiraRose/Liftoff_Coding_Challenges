/*Studio: Counting Characters
In this studio, you will write a program to count the number of times each character occurs in a string and then print the results to the console.

Feel free to prompt the user for a string. However, for the sake of simplicity, you might want to start by hard-coding some text and storing it in a variable. 
For your convenience, here is a quote from the movie Hidden Figures:

If the product of two terms is zero then common sense says at least one of the two terms has to be zero to start with. 
So if you move all the terms over to one side, you can put the quadratics into a form that can be factored allowing that side of the equation to equal zero. 
Once you’ve done that, it’s pretty straightforward from there.*/

function countCharacters(inputString) {
    const characterCounts = {};
  
    for (const char of inputString) {
      if (characterCounts[char]) {
        characterCounts[char]++;
      } else {
        characterCounts[char] = 1;
      }
    }
  
    const sortedCharacters = Object.keys(characterCounts).sort();
    for (const char of sortedCharacters) {
      console.log(`${char}: ${characterCounts[char]}`);
    }
  }
  
  const text = "If the product of two terms is zero then common sense says at least one of the two terms has to be zero to start with. So if you move all the terms over to one side, you can put the quadratics into a form that can be factored allowing that side of the equation to equal zero. Once you’ve done that, it’s pretty straightforward from there.";
  
  countCharacters(text);

  //BONUS MISSION
  /* 1.Prompt the user to enter the string in the command line.

     2. Make the character counts case-insensitive.

     3. Exclude non-alphabetic characters.*/


  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countCharacters(inputString) {
  const characterCounts = {};

  const cleanString = inputString.replace(/[^a-zA-Z]/g, '').toLowerCase();

  for (const char of cleanString) {
    if (characterCounts[char]) {
      characterCounts[char]++;
    } else {
      characterCounts[char] = 1;
    }
  }

  const sortedCharacters = Object.keys(characterCounts).sort();
  for (const char of sortedCharacters) {
    console.log(`${char}: ${characterCounts[char]}`);
  }
}

rl.question('Enter a string: ', (answer) => {
  countCharacters(answer);
  rl.close();
});

  


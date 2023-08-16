/*Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/

function sumUpToNumber(number) {
    if (number < 1 || number > 1000) {
      return "Input must be a positive number between 1 and 1000.";
    }
  
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }

  



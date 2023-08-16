/* Count Instances of a character in a string

    Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

        Examples
    charCount("a", "edabit") ➞ 1
    charCount("c", "Chamber of secrets") ➞ 1
    charCount("b", "big fat bubble") ➞ 4

        Notes
    Your output must be case-sensitive.*/

function charCount(char, str) {
    let count = 0;
    
    for (const ch of str) {
      if (ch === char) {
        count++;
      }
    }
    
    return count;
  }

  //example 
  console.log(charCount("a", "Launch")); // Output: 1
  console.log(charCount("A", "Launchcode the place to be")); // Output: 0
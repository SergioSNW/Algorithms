// The function should search the string for the two occurrences of the character,
// and return the length between them including the 2 characters. 
// If there are less than 2 or more than 2 occurrences of the character,
// the function should return 0.

// Examples:

// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

// Working logic:
/* Declare the counter, go through the string with the loop to count
*  the times we find our character, update count acordingly. We check for the
*  number of counts we found, we are only interested on 2, when it is the case
*  we can find the indexes of the two times we found the character and calculate
*  the length between them.
*/
const subLength = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count ++;
    }
  }
  if (count === 2) {
    const indexOf = string.indexOf(char);
    const lastIndexOf = string.lastIndexOf(char);
    const resolve = lastIndexOf - indexOf + 1;
    return resolve;
  } else {
    return 0;
  }

}

console.log(subLength('Peter', 'e'));

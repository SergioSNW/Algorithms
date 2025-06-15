// The function groceries() takes an array of object literals of grocery items. 
// The function should return a string with each item separated by a comma except
// for the last two items should be separated by the word 'and'. Make sure spaces
// (' ') are inserted where they are appropriate.

Examples

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'

/* Working logic: we initiate a solution String empty. Enter the loop going through
*  each item in the Array and adding it to out string, now we check for the linking
*  parts between the items but without getting the last 2 items and add a coma and a space
*  and finally, if we are between the last and the previous item, we add the word 'and'.
*/
const groceries = arr => {
  let arrString = '';

  for (let i = 0; i < arr.length; i++) {
    arrString += arr[i].item;
    if (i < arr.length - 2) {
      arrString += ', ';
    } else if (i === arr.length - 2) {
      arrString += ' and ';
    }
  }
  

  console.log(arrString);
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
groceries( [{item: 'Cheese Balls'}] );

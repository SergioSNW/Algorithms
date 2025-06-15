// Sorting years in descending order.
// If you need to sort them in ascending order,
// Line 5 has to be changed to <<< return arr.sort((a, b) => a - b);
function sortYears(arr) {
  return arr.sort((a, b) => b - a);
}




const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]


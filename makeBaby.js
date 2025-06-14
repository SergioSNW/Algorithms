// First create new Array, within the loop, make each item a baby and push it to Output Array
function convertToBaby(arr) {
  const babies = []
  arr.forEach(function(item) {
    const babyItem = `baby ` + item;
    babies.push(babyItem);
  })
  return babies;
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


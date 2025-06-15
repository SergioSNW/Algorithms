// find index using a callback to find the index of the item 'keys'.
const findMyKeys = arr => arr.findIndex(item => item === 'keys');



const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

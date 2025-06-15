const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

/* As you can see, we are aiming to sort the objects in a array based on one property value.  
*  In this case, we use sort, first we need to understand the two arguments that sort() takes, 
*  As we want ascending order we use (a, b) => a - b /// with the numTeeth property value of each Object
*/ 
const sortSpeciesByTeeth = arr => {
  return arr.sort((speciesObject1, speciesObject2) => speciesObject1.numTeeth - speciesObject2.numTeeth);
};


console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

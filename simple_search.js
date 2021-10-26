// Simple search O(n), Linear search or Stupid search 😄
// Loop over all the elements in order and try to find the item (linear time)
const {generateArrayStartingFromOne} = require("./helpers");

const simple_search = (number, array) => {
    for(let i = 0; i < number; i++) {
        let key = array[i];
        if(key === number)
            return i;
    }
    return null;
};


let number = 100000000;
const array = generateArrayStartingFromOne(number);

console.time('Execution Time');
console.log(simple_search(number, array));
console.timeEnd('Execution Time');
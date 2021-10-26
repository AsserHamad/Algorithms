// Binary Search: log(n)
// Binary search works only on sorted lists, it keeps splitting
// the list in two (low and high) then comparing (logarithmic time).
const {generateArrayStartingFromOne} = require("./helpers");

const binary_search = (number, array) => {
    let low = 0;
    let high = array.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(array[mid] === number)
            return mid;
        else if(array[mid] > number)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return null;
};

/* -------------------------------------------------------------------------- */
/*                                  Recusive                                  */
/* -------------------------------------------------------------------------- */

const recursive_binary_search = (number, array, low = 0, high = array.length - 1) => {
    let mid = low + Math.floor((high - low) / 2);
    if(array.length === 0)
        return null;
    let middleNumber = array[mid]
    if(middleNumber === number)
        return mid;
    if(middleNumber > number)
        return recursive_binary_search(number, array, low, mid -1)
    else 
        return recursive_binary_search(number, array, mid + 1, high);
}


let number = 100000;
const array = generateArrayStartingFromOne(number);

console.time('Execution Time');
console.log(recursive_binary_search(number, array));
console.timeEnd('Execution Time');
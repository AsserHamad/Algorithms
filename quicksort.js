// Quicksort:
//      A Divide and Conquer method for sorting
//      Works by picking a pivot, and sorting the elements less than and greater than it as two separate arrays;

const {generateRandomArray, getSmallestElementFromArray} = require("./helpers");

const quicksort = (array) => {
    let lessArr = [];
    let moreArr = [];
    let pivot = array[0];
    if(array.length < 2)
        return array;
    for(let i = 1; i < array.length; i++){
        if(array[i] < pivot)
            lessArr.push(array[i]);
        else
            moreArr.push(array[i]);
    }
    return [...quicksort(lessArr), pivot, ...quicksort(moreArr)];
};


let number = 1000;
const array = generateRandomArray(number);

console.log('Initial Array', array)

console.time('Execution Time');
let sort = quicksort(array);
console.timeEnd('Execution Time');

console.log(sort);
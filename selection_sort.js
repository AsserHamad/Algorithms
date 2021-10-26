// Selection Sort: O(n^2) 🤒
//      Sorts by going through an array and finding the lowest/highest value, then
//      adding it into a separate array
const {generateRandomArray, getSmallestElementFromArray} = require("./helpers");

const selection_sort = (array) => {
    let newArr = [];
    while(array.length > 0){
        let {lowest, lowest_index} = getSmallestElementFromArray(array, true);
        newArr.push(lowest);
        array.pop(lowest_index);
    }
    return newArr;
};


let number = 10;
const array = generateRandomArray(number);

console.time('Execution Time');
console.log(selection_sort(array));
console.timeEnd('Execution Time');
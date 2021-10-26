
/* -------------------------------------------------------------------------- */
/*                           Get Element From Array                           */
/* -------------------------------------------------------------------------- */

exports.getSmallestElementFromArray = (array) => {
    let lowest_index = 0;
    let lowest = array[lowest_index];
    array.map((element, index) => {
        if(element < lowest){
            lowest_index = index;
            lowest = element;
        }
    });
    return {lowest_index, lowest};
}

exports.getLargestElementFromArray = (array) => {
    let largest = array[0];
    array.forEach(element => {
        if(element > largest)
            largest = element;
    });
    return largest;
}

/* -------------------------------------------------------------------------- */
/*                              Generating Arrays                             */
/* -------------------------------------------------------------------------- */

exports.getArrayFromTerminal = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Please enter the numbers in order, separated by a comma', array => {
        readline.close();
        array = array.split(',').map(number => Number(number));
        console.log(array);
        return array;
    })
}

exports.generateArray = number => [...Array(number).keys()];

exports.generateArrayStartingFromOne = number => [...Array(number).keys()].map((_, i) => i + 1);

exports.generateRandomArray = (number, max = 200) => {
    let arr = [];
    while(number > 0) {
        arr.push(Math.ceil(Math.random() * max));
        number--;
    }
    return arr;
}

exports.generateRandomSortedArray = (number, max) => {
    let min = 0;
    let newArr = [];
    while(number > 0) {
        let newNumber = min + Math.floor(Math.random() * (max-min));
        newArr.push(newNumber);
        min = newNumber;
        number--;
    }
    return newArr;
}
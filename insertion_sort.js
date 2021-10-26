/* 
    Insertion sort is basically how we intuitively shuffle cards :
        -We have a list (array) of unsorted numbers
        -the array has n length
        -We iterate through the array (left to right), and compare each new key
            with all the previous elements
        -If the key A[i] is bigger then A[j], then A[j + 1] becomes A[j], and A[i] is inserted into A[j] 
        -repeat through the array until sorted
        
    ? Efficient with small numbers

    
*/
const insertion_sort = array => {
    for(let i = 1; i < array.length; i++){
        let key = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > key ){
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key
    }
    return array;
}

console.time('insertion sort')
console.log(insertion_sort([10,2,1,3,4,9,10,22,102,33]))
console.timeEnd('insertion sort')
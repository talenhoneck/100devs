//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function pokemonList(order){
console.log(order.reverse())
}
pokemonList( [1, 2, 3])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function compareSumsOfSquaresAndCubes(a, b) {
     a.reduce((sum,num) => sum + Math.pow(num, 2), 0) > b.reduce((sum,num) => sum + Math.pow(num, 3), 0);
}

const a = [1, 2, 3];
const b = [4, 5, 6];

console.log(compareSumsOfSquaresAndCubes);

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multiplesOfIndex(arr) {
    return arr.filter ((num,index)=> num % index ===0);
}
console.log(multiplesOfIndex([22, -6, 32, 82, 9, 25]));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
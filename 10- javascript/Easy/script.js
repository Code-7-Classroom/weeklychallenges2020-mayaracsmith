// EASY: Using ES6 syntax, write a function that takes in an array of numbers and outputs the maximum number.
// Input: [1, 2, 3]  Output: 3
// Input: [3, 6, 4, 5, 2, 1]  Output: 6
// Input: [3, 3, 3]  Output: 3

const input1 = [1,2,3]
const output1 = () => {
    console.log(Math.max(...input1))
}
output1();

const input2 = [3,6,4,5,2,1]
const output2 = () => {
    console.log(Math.max(...input2))
}
output2();

const input3 = [3,3,3]
const output3 = () => {
    console.log(Math.max(...input3))
}
output3();
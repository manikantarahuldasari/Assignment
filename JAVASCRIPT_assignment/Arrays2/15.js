// Find the largest number in an array using reduce()
const numbers = [10, 25, 40, 5, 60];
var largest=numbers.reduce((max,num)=>(num>max?num:max),numbers[0])
console.log(largest)
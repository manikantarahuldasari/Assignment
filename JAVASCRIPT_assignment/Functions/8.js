// Write a function createMultiplier that returns another function to multiply a number by a given factor.
function createMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}


const double = createMultiplier(2); 
console.log(double(5));  


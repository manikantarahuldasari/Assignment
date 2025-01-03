function array(arr){
    const smallest=Math.min(...arr);
    const largest=Math.max(...arr);
    return { smallest, largest };
    
}
var arr=[1,2,3,4,5]
const result = array(arr);

console.log(result);

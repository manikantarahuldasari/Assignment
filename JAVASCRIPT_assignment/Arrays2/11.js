// Remove "Banana" and "Cherry" from the array
const fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.splice(1,1)
fruits.splice(1,1)
console.log(fruits)
//OR
// ["Banana","Cherry"].forEach((fruit)=>{
//     var index=fruits.indexOf(fruit)
//     if( index!=-1){
//         fruits.splice(index,1)

//     }
// })
// console.log(fruits)
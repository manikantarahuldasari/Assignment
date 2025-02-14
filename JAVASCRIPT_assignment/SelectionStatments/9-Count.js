// Count the Properties in an Object (for...in)
function user(obj){
    
    var count=0
    for(var key in obj){
       if(obj.hasOwnProperty(key))
        count++
        
    }
    console.log(count)
}
user({ name: "Alice", age: 25, city: "New York" })


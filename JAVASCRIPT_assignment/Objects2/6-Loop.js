// Loop through an Object’s Keys and Values
const product = { 
    name: "Laptop",
     price: 1000, 
     brand: "Dell" 
    };
    for(var key in product){
        // var result=product[key]
        console.log(key,":",product[key])
    }
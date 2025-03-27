const file=require("fs")
file.readFile("products.js","utf-8",(error,data)=>{
    if(error){
        console.log("error is fetched")
    }
    else{
        console.log(data)
    }
})
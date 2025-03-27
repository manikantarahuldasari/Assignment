const file=require("fs")
file.writeFile("products.js","var x=5",(error)=>{
    if(error){
        console.log("error while writng file")
    }else{
        console.log("content written sucessfully")
    }
})
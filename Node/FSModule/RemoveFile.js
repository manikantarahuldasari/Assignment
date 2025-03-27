const  fs  = require("console")
const fs=require("fs")
fs.unlink("sample.txt",(error)=>{
    if(error){
        console.log("error is fetched while removing file")
    }
    else{
        console.log("sucessfully sample.txt file is removed")
    }
})
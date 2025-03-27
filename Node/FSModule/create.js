const file=require("fs")
file.open("sample.txt","w",(error)=>{
    if(error){
        console.log("error while creating file")
    }else{
        console.log("file is created")
    }
})
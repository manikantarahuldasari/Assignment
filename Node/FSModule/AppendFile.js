const fs=require("fs")
fs.appendFile("MyInfo.txt","\n im from jammikunta",(error)=>{
    if(error){
        console.log("error while adding content")
    }
    else{
        fs.readFile("MyInfo.txt","utf-8",(error,data)=>{
            if(error){

                console.log("unable read content in a file")
            }else{
                console.log(data)
            }
        })
    }
})
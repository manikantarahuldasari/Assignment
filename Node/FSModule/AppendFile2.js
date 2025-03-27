// read file and add the content in  existing file
const file=require("fs")
file.readFile("RenamedHtml.html","utf-8",(error,data)=>{
    if(error){
        console.log("error is fetched")
    }
    else{
        file.appendFile("h2.txt",data,(error)=>{
            if(error){
                console.log("please check the code")
            }
            else{
                console.log("sucessfullt content added")
            }
        })
    }
})
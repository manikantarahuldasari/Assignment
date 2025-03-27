const file=require("fs")
file.rename("File.html","RenamedHtml.html",(error)=>{
    if(error){
        console.log("error fetched while reanaming the file")
    }
    else{
        console.log("sucessfuly file name is renamed")
    }
})
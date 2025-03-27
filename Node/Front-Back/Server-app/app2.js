const http=require("http")
const  fs=require("fs")


var server=http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-origin","*")
    const urlPath=req.url
    if(urlPath==="/HtmlFile"){
        fs.readFile("HmtlFile.html","utf-8",(error,data)=>{
            if(error){
                res.end("something went wrong")
            }else{
                res.end(data)
            }
        })
    }else if(urlPath==="/JsFile"){
        fs.readFile("JsFile.js","utf-8",(error,data)=>{
            if(error){
                res.end("something went wrong")
            }else{
                res.end(data)
            }
        })
    }else{
        fs.readFile("JsonFile.json","utf-8",(error,data)=>{
            if(error){
                res.end("something went wrong")
            }else{
                res.end(data)
            }
        })
    }
    
})


server.listen(3545,()=>{
    console.log("server is started")
})
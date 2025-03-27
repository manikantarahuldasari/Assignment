const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-origin","*")
    const urlPath=req.url
    if(urlPath==="/Create"){
        fs.writeFile("sam.py","",(error)=>{
            if(error){
                res.end("failed to create file")
            }else{
                res.end("sucessfully file is created")
            }
        })
    }
    else if(urlPath==="/Remove"){
            fs.unlink("sam.py",(err)=>{
                if(err){
                    res.end("failed to remove file")
                    res.end(err)

                }else{
                    res.end("sucessfully file is removed")
                }
            })
    }
})
    

server.listen(3216,()=>{
    console.log("server is started")
})
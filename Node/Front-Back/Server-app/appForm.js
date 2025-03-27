// const http=require("http")
// const fs=require("fs")

// const server=http.createServer((req,res)=>{
//     res.setHeader("Access-control-Allow-origin","*")
//     const urlPath=req.url
//     if(urlPath==="/Create"){
//         fs.writeFileFile("form.txt",)
//     }

// })
// server.listen(2435,()=>{
//     console.log("server started")
// })

const express = require('express');
const cors = require('cors');


const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/submit', async (req, res) => {
    const user=req.body
    try{    
        
        res.json(user)
    
        }catch(error){
            res.send("something went wrong")
        }
});
app.get("/getdata",(req,res)=>{
    res.json(data)
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

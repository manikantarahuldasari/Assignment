

const CreateButton = document.getElementById("createfile")
const RemoveButton = document.getElementById("removefile")


CreateButton.addEventListener("click", () => {
    var promisedata = fetch("http://localhost:3456/Create")
    promisedata.then((sucessdata) => {

        return sucessdata.text()
    }).then((data) => {

        console.log(data)
        var p=document.querySelector("p")
        p.innerText=data

    }).catch((err) => { })

})  
RemoveButton.addEventListener("click", () => {                           
    var RemoveFile  = fetch("http://localhost:3456/Remove")  //(RemoveFile=>promisedata=fetch(""))             
        RemoveFile.then((RemoveData) => {                                
            return RemoveData.text()  
        }).then((data)=>{
            console.log(data)
            document.querySelector("p").innerText=data
        }).catch((error)=>{
            alert("wrong")
            console.log(error)
        })  
})  
// handle promise with async and await

//    RemoveButton.addEventListener("click",async ()=>{
//    try{

//     var RemoveFile=await fetch("http://localhost:3456/Remove")
//     var RemovedFile=await RemoveFile.text()
//     console.log(RemovedFile)
//    }
//    catch(error){
//     alert("something went wrong")
//     console.log(error)
//    }
//    })

        
    













  




     
  
        
  
  
function htmlfile(){
    var htmldata=fetch("http://localhost:3545/HtmlFile")
    htmldata.then((sucessdata)=>{
    return sucessdata.text()

    })
    .then((data)=>{
        console.log(data)
        document.querySelector("p").innerText=data
    }).catch((error)=>{
        console.log("wrong")
        console.log(error)
    })
}
function jsfile(){
    var jsdata=fetch("http://localhost:3545/JsFile")
    jsdata.then((JSdata)=>{
    return JSdata.text()

    })
    .then((data)=>{
        console.log(data)
        document.querySelector("p").innerText=data
    }).catch((error)=>{
        console.log("wrong")
        console.log(error)
    })
}
function jsonfile(){
    var jsondata=fetch("http://localhost:3545/JsonFile")
    jsondata.then((JSondata)=>{
    return JSondata.json()

    })
    .then((data)=>{
        console.log(data)
        document.querySelector("p").innerText=data
        // document.querySelector("p").innerText=data.price
    }).catch((error)=>{
        console.log("wrong")
        console.log(error)
    })
}


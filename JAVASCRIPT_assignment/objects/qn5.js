var user={
    id:"rahul",
    pass:1234
}
function obj(){
    var obj2={
        ...user
    }
    delete obj2.pass
    console.log(obj2)
     
}
obj()
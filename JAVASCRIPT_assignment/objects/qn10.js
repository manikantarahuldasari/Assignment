function object(obj){
    return Object.keys(obj).map(key => ({ key: key, value: obj[key] }));

  
}
var book={title:"react",author:"xyz",pages:300,isRead:"yes"}
var result=object(book)
console.log(result)
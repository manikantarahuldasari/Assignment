var book={
    title:"react",
    author:"xyz",
    pages:300,
    isRead:"yes"
}
// console.log(book)
function obj(){
    var book2={
        ...book
    }
    for (let x in book2){
        console.log(x)
    }
    console.log(book2)

}
obj()
// Write a function to find the product with the price = 500.
const catalog = [
    {
        id: 101,
        name: 'Laptop',
        details: { price: 1000, stock: 5 },
    },
    {
        id: 102,
        name: 'Phone',
        details: { price: 500, stock: 10 },
    },
]
function product(catalog,rate){
    return catalog.find((element)=>element.details.price==rate)

}
var productprice=product(catalog,500)
console.log(productprice)
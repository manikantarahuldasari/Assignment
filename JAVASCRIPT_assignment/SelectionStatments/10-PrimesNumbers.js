// Find Prime Numbers Between Two Numbers
function is_prime(x){
    var prime=true
    for(i=2;i<x;i++){
        if(x%i==0)
            // console.log(x)
            prime=false
            return prime
            
    }
    // console.log(prime)
    return prime
}
// console.log(is_prime(6))

function findPrimes(x,y){
    var arr = []
    for(i=x;i<=y;i++){
        console.log(i)
        if (i == 10){
            console.log(is_prime(i))
            
        }
        // if (is_prime(i)){
        //     arr.push(i)
        // }    
    }
    console.log(arr)
}

findPrimes(10,20)
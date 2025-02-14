function SumOfEven(nos){
    var sum=0
    for(var i of nos){

        if(i%2===0){
        
            sum+=i
        }
        
    }
    console.log(sum)
}
SumOfEven([2,5,8,11,4])
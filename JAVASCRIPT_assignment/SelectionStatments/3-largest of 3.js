// Find the Largest of Three Numbers
function LargestOfThreeNumbers(n1,n2,n3){
    var x=n1
    var y=n2
    var z=n3
    if(x>y&&x>z){
        console.log("x is greater")
    }else if(y>z){
        console.log("y is greater")

    }else{
        console.log("z is greater")

    }
}
LargestOfThreeNumbers(15,300,20)
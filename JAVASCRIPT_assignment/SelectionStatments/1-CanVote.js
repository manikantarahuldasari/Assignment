// . Determine If a User Can Vote
function CanVote(age){
    if(age>=18){
        console.log("user is eligible to vote")
    }else{
        console.log("use is not eligible to vote ")
    }
}
CanVote(22)
CanVote(15)
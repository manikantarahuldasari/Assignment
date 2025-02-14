function CashWithdrawls(balance,amount){
    if(balance>amount){
        if(amount%100===0){

            var withdrawl= balance-amount
            console.log("withdrawl success remaining",withdrawl)
        }else{
            console.log("enter multiples of 100 only")
        }
    }else{
        console.log("please check the balance")
    }
}
CashWithdrawls(20,500)
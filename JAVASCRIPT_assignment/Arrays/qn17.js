function array(arr,index,element){
    arr.splice(index,0,element)
    return arr
     
 }
 var arr=[1,2,3,4,5,6]
 console.log(array(arr,3,"Javascritp"));
 
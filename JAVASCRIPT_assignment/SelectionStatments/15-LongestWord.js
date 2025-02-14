function LongestWord(word){
    var max=""
    var splitedSentence=word.split(" ")
    for(var key of splitedSentence){
        if(max.length<key.length){
            max=key
        }
    }
    return max 

}
console.log(LongestWord("The quick brown fox jumps over the lazy dog"));
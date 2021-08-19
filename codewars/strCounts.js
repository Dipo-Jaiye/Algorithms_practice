function duplicateEncode(word){
    word = word.toLowerCase();
    let wordDict = {};
    let encoded = "";
    for(let i = 0; i < word.length ; i++){
        if(wordDict.hasOwnProperty(word[i])){
            encoded += wordDict[word[i]];
        } else {
            if(word.indexOf(word[i],i+1) == -1){
                encoded += "(";
            }
            else {
                wordDict[word[i]] = ")";
                encoded += ")";
            }
        }
    }
    return encoded;
}

console.log(duplicateEncode("(( @"));
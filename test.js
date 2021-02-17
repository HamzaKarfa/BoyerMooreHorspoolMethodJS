const phrase = "Elle est ou la moulaga ? Grosse moula tah bogota !"
const searchWord = "moula"

/* Naive Method */
const naive = function (needle, haystack){
    let skip = 0
    while(haystack.length - skip >= needle.length ){
        let i = 0 
        while(haystack[skip + i] === needle[i]){
            if (i === needle.length -1){
                return skip 
            }
            i++
        }
        skip ++
    }
    return -1

} 

/* Boyer Moore Horspool Method */
const moore = function (needle, haystack){
    const table = charTable(needle)

    let skip = 0
    while(haystack.length - skip >= needle.length ){
        let i = needle.length - 1 
        while(haystack[skip + i] === needle[i]){
            if (i === 0){
                return skip 
            }
            i--
        }
        skip += (table[haystack[skip + needle.length -1]] || needle.length)
    }
    return -1
}

const charTable = function (word){
    const table = {}
    for (let i = 0; i < word.length - 1; i++) {
        table[word[i]] = word.length -i - 1;
        
    }
    return table
}


console.time('naive')
console.log(naive(searchWord, phrase));
console.timeEnd('naive')


console.time('moore')
console.log(moore(searchWord, phrase));
console.timeEnd('moore')
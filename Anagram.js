// An anagram is a word  or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// Input : (s = 'anagram'), (t = 'nagaram); ------>>> Output : true;

 let isAnagram = function(word1 , word2){
    word1 = word1.split('').sort().join('')
    word2 = word2.split('').sort().join('')

    return word1 === word2
}

console.log(isAnagram('faizan' , 'naziaf'));



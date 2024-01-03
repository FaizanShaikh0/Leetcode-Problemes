// Given an integer x, return true if x is apalindrome, and false otherwise.


const ispalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split('').reverse().join('')
}
const ans = ispalindrome(121)
console.log(ans);
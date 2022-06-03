function isPalindrome(str, i, j){
    if(i >= j){
        return true;
    }
    return str[i] === str[j] && isPalindrome(str, ++i,--j);
}
let input = 'abba';
console.log(isPalindrome(input, 0, input.length -1));
console.log(isPalindrome('abcd', 0, 4 -1));
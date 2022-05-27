let SubstringPalindrome = (str, l, r)=>
{
    str = str.slice(l,r);//this will return you the substring
    if(str == str.split("").reverse().join(""))
    {
        console.log("Palindrome")
    }
    else 
    {
        console.log("Not a palindrome")
    }
    
}
let str = "aaabbaaa";
SubstringPalindrome(str,1,4);
SubstringPalindrome(str,2,6);
/*2. Write a function that takes a string and returns if string is a palindrome.*/


function palindrome(myString){

    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
    
    /* Check to see if myString is a Palindrome*/
    if(removeChar === checkPalindrome){
      
      console.log(myString + " is a Palindrome");
    }else{
      
      console.log(myString + " is not a Palindrome");
    }
    }
    
    palindrome('Madam')
    palindrome('Star Wars')
    palindrome('2,3,4,3,2')
    palindrome('7,10,7,8,9')
    palindrome('hello 123 !@#$%^WORLD?.')
/*// Iterative javascript program to
// multiply array elements
 
    var arr = [2,3,4,5,6,7,8];
 
    // Method to calculate the
    // product of the array
    function multiply() {
        var sum = 1;
        for (i = 0; i < arr.length; i++)
            sum = sum * arr[i];
        return sum;
    }
 
    // Driver Code
     
        // Method call to calculate product
        console.log(multiply());*/


        const arr = [2,3,4,5,6,7,8];
let res = arr.reduce((prod, curr) => prod*curr,1);
console.log(res);
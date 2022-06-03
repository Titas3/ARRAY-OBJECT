/*1. Take an array of size 10. Calculate sum of all array elements using tail recursion.*/


function arraySum(array, size,sum)
{
    if (size == 0)
        return sum;
    else{
        sum+=array[size-1];
        return arraySum(array,size-1,sum);
    }
}
 
var array = [1,2,3,4,5,6,7,8,9,10];
var size = array.length;
let sum=0;
console.log( "Sum of array: "+arraySum(array, size,sum));
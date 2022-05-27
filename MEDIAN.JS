
// MEDIAN

// Middle value in the list of Number
// 1.sort the values
// 2.find out the middle values


let median =(nums)=>
{
    let m=0;
    let n= nums.length;
    nums.sort((a,b)=>a-b);
    if(n%2==0)//even
    {
let a= nums[(n/2)-1];
let b= nums[(n/2)+1];
console.log(a);
console.log(b);
m=(a+b)/2;
    }
    else{
        m=nums[parseInt(n/2)];
    }
    return m;
}
const nums1 = [3,5,4,4,1,1,2,3];
const nums2 = [1,2,3];
console.log("Median using first approach:"+ median(nums1));
console.log("Median using first approach:"+ median(nums2));
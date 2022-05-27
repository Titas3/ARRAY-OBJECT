// MEAN

//approach 1

let mean1 = (nums)=>
{
    let sum = 0;
    for(let i=0;i<nums.length;i++)
    {
        sum+=nums[i];
    }
    console.log(sum);
    console.log(nums.length);
    console.log(sum/nums.length);
}
const nums = [3,5,4,4,1,1,2,3];
mean1(nums);

// approach 2 using rest parameters

const mean = (...nums)=> nums.reduce((acc,val)=> acc + val,0)/nums.length;
const nums1 = [3,5,4,4,1,1,2,3];
const nums2 = [1,2,3];
mean(nums1);
mean(nums2);
console.log("Mean using second approach :"+ mean(...[3,5,4,4,1,1,2,3]));
console.log("Mean using second approach :"+ mean(...[1,2,3]));
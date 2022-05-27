// MODE 
// return repeated values

let Mode =(nums)=>
{
    let hm = new Map();
    for(let i=0;i<nums.length;i++)
    {
        if(hm.has(nums[i])==false)
        {
            hm.set(nums[i],1);
        }
        else{
            let count = hm.get(nums[i]);
            count++;
            hm.set(nums[i],count);
        }
    }
    let modeArray=[];
    for(let[key,value] of hm){
        if(value>1)
        {
            modeArray.push(key);
        }
    }
    return modeArray;
}
const nums1 = [3,5,4,4,1,1,2,3];
console.log("Mode is " + Mode(nums1));
const nums3=[1,2,3,4,2,3,2,4,2,3]
console.log("Mode is " + Mode(nums3));
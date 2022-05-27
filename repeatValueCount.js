let arr = [1,2,2,4,3,4,1,2,2,2,1,1,1,4];

//  key -> numbers
//pair -> count of those numbers

let hm = new Map();


for(let i =0; i<arr.length; i++)
{
    if(hm.has(arr[i]) == false) // value is not there in the hashmap
    {
        hm.set(arr[i],1);
    }
    else //update the count
{
    let count = hm.get(arr[i]);
    count++;
    hm.set(arr[i], count);
}

}
console.table(hm);

for(let [key,value] of hm)
{
   // if(value == 1)
    //{
        console.log(`${key} is occuring ${value}`)
    //}
}


//approach 2 - using rest parameters

/*const mean = (...nums)=> nums.reduce((acc,val)=> acc+val,0)/nums.length

const nums1 = [3,5,4,4,1,1,2,3];
const nums2 = [1,2,3];

mean(nums1);
mean(nums2);
console.log("Mean using second approach : " + mean(...[3,5,4,4,1,1,2,3]))
console.log("Mean using second approach :" + mean(...[1,2,3])); */
function removeDuplicate(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }
        else{
            obj[arr[i]]=1;
        }
    }
    console.log(obj);
    return Object.keys(obj);
}
arr = [6,1,1,2,2,3,3,4,4,5,5,6];
console.log(removeDuplicate(arr));
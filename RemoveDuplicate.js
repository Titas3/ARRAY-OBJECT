 function removeDuplicates(values) {
    let obj = {};
     for(let value of values) {
        obj[value] = true;
   }
    return Object.keys(obj);
 }


 console.log(removeDuplicates([1, 2, 2, 5, 9, 9, 9, 5]))
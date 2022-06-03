const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

let i=Math.floor(Math.random()*8);
for(var j=0;j<i;j++)
{
  let temp = arr.pop();
  arr.unshift(temp);
}
console.log(arr);
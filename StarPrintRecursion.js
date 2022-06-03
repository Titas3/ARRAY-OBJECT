let pattern = (n) => {
  if (n === 0) {
    return;
  }
  let star = " ";
  pattern(n - 1);
  for (let i = 0; i < n; i++) {
    star += " *";
  }
  console.log(star);
};
pattern(5);


/*2nd approach------->>>>>
let result = "*";
function pattern(n){
    console.log(result);
    n=n-1;
    if(n>0){
        result += " *";
        pattern(n);
    }
} 
pattern(5);
*/
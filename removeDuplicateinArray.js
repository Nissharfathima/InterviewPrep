let arr = [1,1,1,2,2,2,3,3,3,4];
const removeDuplicate = arr.filter((item,index) => arr.indexOf(item) === index);
console.log(removeDuplicate);

// O/p
//(4) [1, 2, 3, 4]



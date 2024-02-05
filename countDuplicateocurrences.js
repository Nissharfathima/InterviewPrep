let arr = [1,1,2,2,3,3,3,4];

const newObj = arr.reduce((acc,item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
},{})

console.log(newObj);
const countCharsinString = (str) => {
    let strArr = str.split('');
    return strArr.reduce((mapObj, str) => {
        mapObj[str] =  (mapObj[str] || 0) + 1;
        return mapObj;
    }, {});
};
let str = "hello";
console.log(countCharsinString(str));

// Output 
// {H: 1, e: 1, l: 2, o: 2}

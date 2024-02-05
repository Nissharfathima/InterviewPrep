let string = "hello";
let strArr = string.split("");

// Using built-in
// console.log(strArr.reverse().join(""));

// Without Built-in 

let revStr = [];
for(let i=strArr.length-1; i >= 0; i--) {
    revStr.push(strArr[i]);
}
console.log(revStr.join(''));


//     var b = 2;


// console.info(a);
// console.info(b);

// var a = [];
// for (let i = 0; i < 10; i++) {
//     a[i] = function() {
//         console.log(i);
//     };
// }
// a[6]();

// console.log(a);
// let a = 1;
// a => a * 2;
const funcObj = name => ({ name, age: 27 });
console.info(funcObj);

const addFun = (a = 1, b = 2) => a+b;
console.info(addFun());
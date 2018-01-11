// var x = 1;
// if (function f(){}) {
//     x += typeof f;
// }


// console.info(x);
// x = (function(foo){
//     return typeof foo.bar;
// })({foo: {bar: 1}});
// console.info(x);
// 
// function setTeacher(configure) {
//     return {
//         xxx
//     };
// }

// setTeacher({
//     name:

// })
// var a = [1, 2, 3];

// a.push(4);
// console.info(a);
// a.unshift(0);
// console.info(a);
// a.pop();
// console.info(a);
// a.shift();
// console.info(a);
// console.info( a.reverse());

// var a = [2,1,3,6,8,4,4];
// a.sort(function(prev, next) {
//     if(prev > next) return 1;
//     if(prev < next) return -1;
//     return 0;
// })

// console.info(a);

// a.forEach(function(c,d) {
//     console.info(c,d);
// });

// var b = a.map(function(c) {
//     return c + 3;
// })
// console.info(b);

// var b = a.reduce(function(c,d) {
//     return c+d;
// }, 0);

// console.info(b);

// a = (function() {
//     return typeof arguments;
// })();

// console.info(a);

// function getFunc() {
//     var a = 7;
//     return function(b) {
//         console.info(a+b);
//     }
// }
// var f = getFunc();
// f(5);

function f() {
    return f;
}
console.info(new f() instanceof undefined);
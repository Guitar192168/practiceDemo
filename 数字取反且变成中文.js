// function reverse() {
//     var num = window.prompt('input')
//
//     var str = '';
//     for (let i = num.length - 1; i >= 0; i--) {
//         // str += num.charAt(i)
//         str += num.transfer(i)
//     }
//
//     document.write(str)
// }
//
// function transfer(target) {
//     switch (target) {
//         case '1':
//             return '壹';
//         case '2':
//             return '贰'
//     }
//
// }

//阶乘

// function test(number) {
//     if (number === 1) {
//         return 1
//     }
//
//     return number * test(number - 1)
// }
//
// var res = test(5)
// console.log(res)
//


// function jc(num){
//     if(num === 1){
//         return 1
//     }
//     return num * jc(num -1)
// }
// var test =  jc(5)
// console.log(test)


//递归

// function fib(num) {
//     if (num === 1 || num === 2) {
//         return 1
//     }
//
//     return fib(num - 1) + fib(num - 2)
// }
//
// var test = fib(8)
// console.log(test)

//
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1)
// }
//
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i,'2222'), 1)
// }


//箭头函数没有this
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }
//
// console.log(shape.diameter())
// console.log(shape.perimeter())


// function Person(name, age, sex) {
//     var a = 0;
//     this.name = name
//
//     function sss() {
//         a++;
//         // document.write(a)
//         console.log(a)
//     }
//
//     this.say = sss
// }
//
// var oPerspn = new Person()
// oPerspn.say()
// oPerspn.say()
// var oPerspn1 = new Person()
// oPerspn1.say()


function A() {

}

A.prototype.n = 1;
var b = new A()
A.prototype = {
    n: 2,
    m: 3
}

var c = new A()
console.log(b.n, b.m)
console.log(c.n, c.m)
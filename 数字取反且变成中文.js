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

function fib(num) {
    if (num === 1 || num === 2) {
        return 1
    }

    return fib(num - 1) + fib(num - 2)
}

var test = fib(8)
console.log(test)

// 题目描述：
// 编写一个函数，接受一个字符串作为输入，返回该字符串的反转形式

// 方法1
// - 使用 split  字符串 --> 数组。
// - 使用 reverse 数组 反转。
// - 使用 join 将字符数组拼接成反转后的字符串。

// function reverseString(str){
//     const reversedStr = str.split('').reverse().join('')
//     return reversedStr
// }

// 方法 2 for 反向循环简单版本  还是挺建议的
function reverseString(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }

    return reversed
}


// 方法3 for循环【不建议】
// function reverseString(str){
//     // 将字符串转换成字符数组
//     let charArray = str.split('')
//     // 获取数组的长度
//     let len = charArray.length

//     // 使用 for 循环遍历字符串的前一半，与末尾的字符进行交换，从而实现字符串的反转
//     // 前一半 和 后一半 交换 高明 ！
//     for(let i = 0; i < Math.floor(len / 2); i ++){
//         let temp = charArray[i]
//         charArray[i] = charArray[len - 1 - i]
//         charArray[len - 1 - i] = temp
//     }

//     // 将字符数组拼接成字符串
//     const reversedStr = charArray.join('')
//     return  reversedStr
// }

// 测试数据和结果展示：
const test4 = "Hello";
console.log(reverseString(test4));  // 期望输出: "olleH"

const test5 = "JavaScript";
console.log(reverseString(test5));  // 期望输出: "tpircSavaJ"

const test6 = "Algorithm";
console.log(reverseString(test6));  // 期望输出: "mhtirogolA"
function findMaxOne(arr){
    // 假设第一个值 为 最大值
    let maxOne = arr[0]

    // 遍历更新 最大值
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxOne){
            maxOne = arr[i]
        }
    }

    return maxOne
}

// 测试数据1
console.log(findMaxOne([3, 7, 1, 9, 5])); // 输出 9

// 测试数据2
console.log(findMaxOne([22, 45, 11, 8, 36])); // 输出 45

// 测试数据3
console.log(findMaxOne([-5, -2, -8, -1])); // 输出 -1

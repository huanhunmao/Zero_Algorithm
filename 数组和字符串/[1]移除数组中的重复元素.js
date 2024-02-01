// 编写一个函数，接受一个包含重复元素的数组作为输入，返回一个不包含重复元素的新数组
function removeDuplicates(arr){
    let result = []

    // 遍历输入数组，如果元素不在 result 中，则加入 result
    for(let i = 0; i < arr.length; i ++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}


// 测试数据1
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // 输出 [1, 2, 3, 4, 5]

// 测试数据2
console.log(removeDuplicates(['apple', 'orange', 'apple', 'banana'])); // 输出 ['apple', 'orange', 'banana']

// 测试数据3
console.log(removeDuplicates([1, 2, 3, 4, 5])); // 输出 [1, 2, 3, 4, 5]

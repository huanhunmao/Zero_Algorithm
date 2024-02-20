// 给定一个二进制数组，你需要找到包含最大数量的连续1的子数组。编写一个函数，返回最大连续1的个数。

// 示例：

// javascript
// Copy code
// 输入: [1,1,0,1,1,1,0,1,1]
// 输出: 3
// 解释: 子数组 [1,1,1] 包含最多的连续1。

function findMaxConsecutiveOnes(nums){
    // 初始化最大连续1的个数和当前连续1的个数
    let maxCount = 0
    let count = 0

    for(const num of nums){
        // 如果当前元素为1，增加当前连续1的个数，并更新最大连续1的个数
        if(num === 1){
            count ++
            maxCount = Math.max(maxCount, count)
        }else{
            // 如果当前元素不为1，重置当前连续1的个数
            count = 0
        }
    }

    return maxCount
}

// 测试
const nums1 = [1, 1, 0, 1, 1, 1,1, 0, 1, 1];
console.log(findMaxConsecutiveOnes(nums1)); // 输出: 4
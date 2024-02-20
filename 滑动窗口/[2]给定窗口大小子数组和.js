// 滑动窗口函数，接受数组和窗口大小作为参数
function maxSubarraySum(arr, windowSize) {
    if (arr.length < windowSize) {
        return "窗口大小大于数组长度";
    }

    let maxSum = 0;
    let tempSum = 0;

    // 计算初始窗口内的和
    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // 遍历数组，滑动窗口计算最大子数组和
    for (let i = windowSize; i < arr.length; i++) {
        // 新窗口和 = 上一次窗口和 - 窗口最左侧元素 + 窗口最右侧元素 [关键一手]
        tempSum = tempSum - arr[i - windowSize] + arr[i];
        // 更新最大子数组和
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

// 示例用法
const arr = [1, 2, 3, 4, 5, 6, 7, 10];
const windowSize = 3;
const result = maxSubarraySum(arr, windowSize);

console.log(`数组 ${arr} 中大小为 ${windowSize} 的最大子数组和为: ${result}`); 
// 数组 1,2,3,4,5,6,7,10 中大小为 3 的最大子数组和为: 23
// 6, 7, 10
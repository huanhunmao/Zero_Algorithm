// 滑动窗口函数，接受数组和窗口大小作为参数
function slidingWindowAverage(arr, windowSize) {
    if (arr.length < windowSize) {
        return "窗口大小大于数组长度";
    }

    let result = [];
    let windowSum = 0;

    // 计算初始窗口内的和
    for (let i = 0; i < windowSize; i++) {
        windowSum += arr[i];
    }

    // 计算初始窗口的平均值
    result.push(windowSum / windowSize);

    // 遍历数组，滑动窗口计算平均值
    for (let i = windowSize; i < arr.length; i++) {
        // 新窗口和 = 上一次窗口和 - 窗口最左侧元素 + 窗口最右侧元素
        windowSum = windowSum - arr[i - windowSize] + arr[i];
        // 计算新窗口的平均值并添加到结果数组中
        result.push(windowSum / windowSize);
    }

    return result;
}

// 示例用法
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const windowSize = 3;
const result = slidingWindowAverage(arr, windowSize);

console.log(`数组 ${arr} 中大小为 ${windowSize} 的滑动窗口平均值数组为: ${result}`);

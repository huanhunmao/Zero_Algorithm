// 最大子数组和
// 问题描述： 给定一个整数数组，找到一个具有最大和的连续子数组（子数组要求至少包含一个元素），返回该最大和
function maxSubArray(nums) {
    let maxSum = nums[0];  // 初始最大和为第一个元素
    let currentSum = nums[0];  // 当前和为第一个元素

    for (let i = 1; i < nums.length; i++) {
        // 如果当前和为负数，重新开始计算当前和
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // 更新最大和
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}




// test
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const res = maxSubArray(arr)
console.log('res', res); // 输出: 6（子数组 [4, -1, 2, 1] 具有最大和）

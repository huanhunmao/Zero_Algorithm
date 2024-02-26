// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
// 子数组是数组中元素的连续非空序列。
//  
// 示例 1：
// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：
// 输入：nums = [1,2,3], k = 3
// 输出：2

var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    const sumMap = new Map();
    sumMap.set(0, 1); // 初始化为包含一个键值对 {0 => 1} 表示累积和为0的次数为1

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // 使用 sum - k 查看之前是否存在某个位置的累积和，使得两者之差等于目标值 k
        if (sumMap.has(sum - k)) {
            // 如果存在，说明在这两个累积和之间的子数组的和为 k，因此将符合条件的子数组个数 count 增加上之前记录的次数
            count += sumMap.get(sum - k);
        }

        // 将当前累积和添加到哈希表中，如果已存在则增加次数，否则设置次数为1
        if (sumMap.has(sum)) {
            sumMap.set(sum, sumMap.get(sum) + 1);
        } else {
            sumMap.set(sum, 1);
        }

        // console.log('sumMap',sumMap);
        // sumMap Map(2) { 0 => 1, 1 => 1 }
        // sumMap Map(3) { 0 => 1, 1 => 1, 2 => 1 }
        // sumMap Map(4) { 0 => 1, 1 => 1, 2 => 1, 3 => 1 }
    }

    return count;
};

// test 
const nums = [1,1,1], k = 2
console.log(subarraySum(nums,k));

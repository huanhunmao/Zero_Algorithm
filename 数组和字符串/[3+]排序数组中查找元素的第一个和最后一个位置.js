// 实现 在排序数组中查找元素的第一个和最后一个位置
// 中等
// 相关标签
// 相关企业
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。


// 如果数组中不存在目标值 target，返回 [-1, -1]。


// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。


// 示例 1：


// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：


// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]


// 二分查找
const binarySearch = (nums, target, lower) => {
    // ans 是一个用于记录最终的插入位置的变量
    let left = 0, right = nums.length - 1, ans = nums.length

    while(left <= right){
        const mid = Math.floor((left + right) / 2) 
        // nums[mid] 大于目标值 target 或者在查找第一个大于等于目标值的情况下 lower 为真且当前中间值 nums[mid] 大于等于目标值时，
        // 更新 ans 为当前中间位置 mid，然后调整查找范围
        if(nums[mid] > target || (lower && nums[mid] >= target)){
            right = mid - 1
            ans = mid
        }else{
            left = mid + 1
        }
    }

    return ans
}


var searchRange = function (nums, target){
    let ans = [-1, -1]
    let leftIdx = binarySearch(nums, target, true)
    let rightIdx = binarySearch(nums, target, false) - 1

    if(leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target){
        ans =  [leftIdx, rightIdx]
    }
        return ans
}




console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // 输出: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // 输出: [-1, -1]
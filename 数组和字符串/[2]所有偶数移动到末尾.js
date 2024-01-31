// 给定一个整数数组 nums，编写一个函数将所有的偶数移到数组的后面，保持其它元素的相对顺序不变
// 方法
// - 使用双指针的方法，一个指向当前元素，一个指向数组末尾。
// - 遍历数组，如果当前元素是偶数，则与数组末尾元素交换。
// - 保持相对顺序不变。

// 算法实现
function moveEvenToEnd(nums) {
    // 使用双指针，一个指向当前元素，一个指向数组末尾
    let current = 0;
    let end = nums.length - 1;

    // 遍历数组
    while (current < end) {
        // 如果当前元素为偶数，则与数组末尾元素交换
        if (nums[current] % 2 === 0) {
            while (nums[end] % 2 === 0 && current < end) { // 从后往前 原本是 偶数 不动 
                end--;
            }
            [nums[current], nums[end]] = [nums[end], nums[current]]; // 从前往后的奇数 和 从后往前的 偶数 互换位置 
        }
        current++;
    }

    return nums;
}

// 测试数据和结果展示：
const test1 = [1, 2, 3, 4, 5, 6];
console.log(moveEvenToEnd(test1));  // 期望输出: [1, 3, 5, 2, 4, 6]

const test2 = [2, 4, 1, 6, 3, 7, 9, 10];
console.log(moveEvenToEnd(test2));  // 期望输出: [2, 4, 6, 8, 10]

const test3 = [1, 3, 5, 7, 9];
console.log(moveEvenToEnd(test3));  // 期望输出: [1, 3, 5, 7, 9]

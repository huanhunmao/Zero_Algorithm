// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

// 示例 1：

// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]

function findDisappearedNumbers(nums) {
    // 遍历数组，将出现过的数字标记为负数
    for(let i = 0; i < nums.length; i++){
        const num = Math.abs(nums[i]) - 1 //  返回一个数字的绝对值 转换为实际下标并减1 调整索引：如果原始数组中的数值代表索引，并且数组是从0开始计数的，那么获取绝对值后减1可以确保得到正确的索引值
        if(nums[num] > 0){  // 如果该位置的值大于0，则表示还未标记过
            nums[num] = -Math.abs(nums[num]) 
        }
    }
  
    // 创建结果数组用于存储消失的数字
    const result = [];
    // 再次遍历数组，找到值大于0的元素，即为缺失的数字
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        result.push(i + 1);
      }
    }
  
    return result;
  }
  
  // 示例测试
  console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // 输出：[5, 6]
  console.log(findDisappearedNumbers([1, 1])); // 输出：[2]
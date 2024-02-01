// 编写一个函数，判断给定的字符串是否是回文。回文是指正着读和倒着读都一样的字符串
function isPalindrome(str){
      // 转为小写并去除空格
      str = str.toLowerCase().replace(/\s/g, '')

      // 使用双指针法，一个指向字符串的开头，另一个指向结尾，逐个比较字符
      let start = 0
      let end = str.length - 1

      while (start < end){
         // 比较字符
        if(str[start] !== str[end]){
            return false // 不是回文
        }

        start ++
        end --
      }

      return true // 是
}

// 测试数据1
console.log(isPalindrome("level")); // 输出 true

// 测试数据2
console.log(isPalindrome("A man a plan a canal Panama")); // 输出 true

// 测试数据3
console.log(isPalindrome("hello")); // 输出 false

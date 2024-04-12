
// 使用动态规划方法，其中我们定义一个布尔类型的数组 dp，其长度比字符串 s 的长度大 1。
// dp[i] 表示字符串 s 的前 i 个字符是否可以被拆分成 wordDict 中的单词
function wordBreak(s, wordDict) {
    // 初始化时，我们将 dp[0] 设为 true，因为空字符串可以被拆分成任何单词，然后我们逐步遍历字符串 s 的每个位置 i
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true

    // 对于每个位置 i，我们将再次遍历从 0 到 i 的位置，记为 j
    for(let i = 1; i <= s.length; i++) {
        for(j = 0; j < i; j++) {
            // 检查从位置 j 到 i 的子字符串是否在字典中，并且前 j 个字符是否可以被拆分。如果满足这两个条件，我们将 dp[i] 设为 true，表示前 i 个字符可以被拆分
            // wordDict.includes(s.substring(j, i))：这个部分检查了从位置 j 到位置 i 的子字符串是否在字典 wordDict 中
            // substring 就是截取作用 [)
            if(dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true 
                break
            }
        }
    }

    // 整个字符串是否可以被拆分
    return dp[s.length]
}

// 测试示例
const s1 = "leetcode";
const wordDict1 = ["leet", "code"];
console.log(wordBreak(s1, wordDict1)); // 输出: true

const s2 = "applepenapple";
const wordDict2 = ["apple", "pen"];
console.log(wordBreak(s2, wordDict2)); // 输出: true

const s3 = "catsandog";
const wordDict3 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s3, wordDict3)); // 输出: false
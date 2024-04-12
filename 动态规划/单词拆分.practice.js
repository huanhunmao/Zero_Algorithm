


// 使用动态规划方法，其中我们定义一个布尔类型的数组 dp，其长度比字符串 s 的长度大 1。
// dp[i] 表示字符串 s 的前 i 个字符是否可以被拆分成 wordDict 中的单词
function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true 

    for(let i = 1; i <= s.length; i++) {
        for(let j = 0; j < i; j++) {
            if(dp[j] && wordDict.includes(s.substring(j, i))){
                dp[i]= true
                break
            }
        }
    }

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
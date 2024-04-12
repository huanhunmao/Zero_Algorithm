function coinChange(coins, amount) {
   const dp = new Array(amount + 1).fill(Infinity);
   dp[0] = 0

   for(let i = 1; i <= amount; i++) {
        for(const coin of coins){
            if(coin <= i && dp[i - coin] + 1 < dp[i]){
                dp[i] = dp[i - coin] + 1
            }
        }
   }

   return dp[amount] === Infinity ? -1 : dp[amount]
}

// 测试示例
console.log(coinChange([1, 2, 5], 11)); // 输出 3
console.log(coinChange([2], 3)); // 输出 -1
console.log(coinChange([1], 0)); // 输出 0

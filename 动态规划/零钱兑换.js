function coinChange(coins, amount) {
    // 创建一个数组，用于保存每个金额所需的最少硬币数量，初始值为Infinity
    const dp = new Array(amount + 1).fill(Infinity);
    // 初始化金额为0时所需的硬币数量为0
    dp[0] = 0;
    
    // 遍历每个金额，计算所需的最少硬币数量
    for (let i = 1; i <= amount; i++) {
        // 遍历每种硬币的面额
        for (const coin of coins) {
            // 如果当前硬币面额小于等于当前金额，并且使用当前硬币后的所需硬币数量比之前更少，则更新dp数组
            if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
            }
        }
    }
    
    // 如果最终dp数组中amount位置的值仍然是Infinity，说明无法组成总金额，返回-1；否则返回dp数组中amount位置的值
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// 测试示例
console.log(coinChange([1, 2, 5], 11)); // 输出 3
console.log(coinChange([2], 3)); // 输出 -1
console.log(coinChange([1], 0)); // 输出 0

function numSquares(n) {
    // 创建一个数组来保存结果
    const dp = new Array(n + 1).fill(Infinity);
    // 初始条件，0可以由0个完全平方数组成
    dp[0] = 0;
    
    // 计算从1到n的每个数的最少完全平方数数量
    for (let i = 1; i <= n; i++) {
        // j为可能的完全平方数
        for (let j = 1; j * j <= i; j++) {
            // 更新dp[i]为当前的最小值
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    // 返回结果
    return dp[n];
}

// 测试示例
console.log(numSquares(12)); // 输出 3
console.log(numSquares(13)); // 输出 2

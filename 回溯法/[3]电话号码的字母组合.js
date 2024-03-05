// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回

// 示例 1：

// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a","b","c"]

var letterCombinations = function(digits){
    if(digits.length === 0){
        return []
    }

    // 数字 / 字母映射关系
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = []

    const backtrack = (index, current) => {
        // 长度相同 是需要的值 
        if(index === digits.length){
            result.push(current)
            return 
        }

        const letters = digitMap[digits[index]]
        console.log('letters',letters);
        // letters abc
        // letters def

        for(let i = 0;  i < letters.length; i ++){
            backtrack(index + 1, current + letters[i])
        }
    }

    // 初始值
    backtrack(0, '')

    return result
}

// 示例
console.log(letterCombinations("23")); // 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // 输出：[]
console.log(letterCombinations("2"));  // 输出：["a","b","c"]

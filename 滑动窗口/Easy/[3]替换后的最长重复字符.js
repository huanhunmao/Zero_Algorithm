// 问题描述： 给定一个字符串和一个整数 k，你需要对字符串进行操作，
// 使得它包含的每个字符出现的次数最多为 k，求解最长子串的长度

function longestSubstring(s, k){
    const charCount = {}
    let maxLen = 0

    for(const char of s){ // for-of 遍历 数组/字符串
        // 遍历 给定字符串 s 将值存到 charCount 中  结构类似 {'0':1, '1':1 } 这种 
        // 开始 对象是 空的 所以 charCount[char] 每个字符对应的 数量都是 1
        charCount[char] = (charCount[char] || 0) + 1
    }

    for(const char in charCount){ // for-in 遍历 对象
        // console.log('char', char);   // 拿到每个 字符 比如 h/e/l/o
        if(charCount[char] < k){ // 需要将这些字符替换掉
            const substrings = s.split(char) //  将字符串 s 按照当前的字符 char 进行分割，生成一个数组 substrings, 子串中不包含字符 char
            // substrings [ '', 'ello lllooo' ]
            // substrings [ '', 'llo lllooo' ]
            // substrings [ 'llo', 'lllooo' ]
            // substrings [ '', '', 'o' ]
            // substrings [ '', '' ]

            console.log('substrings',substrings);
            for(const substring of substrings){
                //  在每个子串上调用 longestSubstring 函数，递归地求解当前子串中最长满足条件的子串长度，并与 maxLen 比较，取较大值更新 maxLen
                maxLen = Math.max(maxLen, longestSubstring(substring, k))
            }

            return maxLen // 返回经过替换后的最长满足条件的子串的长度
        }
    }
    // console.log('s',s);  // lllooo

    return s.length 
}

// test 
const str = 'hello lllooo'
const res = longestSubstring(str,3)
console.log('res',res); // res 6


// function mergeArray(intervals){
//     if(intervals.length <= 1) {
//         return intervals
//     }

//     // 对区间数组按照起始位置进行排序，确保相邻的区间起始位置是有序的
//     intervals.sort((a,b) =>  a[0] - b[0])

//     let merged = [intervals[0]] // 排序之后 这就是第一个

//     // 遍历排序后的区间数组，合并重叠的区间
//     for(let i = 1; i < intervals.length; i ++){
//         let currentInterval = intervals[i]
//         let lastMerged = merged[merged.length - 1]

//           // 判断当前区间是否与上一个合并区间重叠
//           if(currentInterval[0] <= lastMerged[1]){
//             // 重叠，合并区间
//             lastMerged[1] = Math.max(lastMerged[1], currentInterval[1])
//           }else{
//             // 不重叠，添加新的合并区间
//             merged.push(currentInterval)
//           }
//     }

//     return merged
// }



// 示例
let intervals1 = [[1,3],[8,10],[2,6],[15,18]];
let result1 = mergeArray(intervals1);
console.log(result1); // 输出 [[1,6],[8,10],[15,18]]

let intervals2 = [[4,5], [1,4], [2,6],[7,9]];
let result2 = mergeArray(intervals2);
console.log(result2); // 输出 [[1,5]]
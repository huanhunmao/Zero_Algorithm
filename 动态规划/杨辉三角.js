function generate(numRows) {
    if (numRows === 0) return [];

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [1]; // 每行的第一个元素为1
        const prevRow = triangle[i - 1];

        for (let j = 1; j < i; j++) {
            row.push(prevRow[j - 1] + prevRow[j]); // 中间的元素为上一行对应位置和它前一个位置的和
        }

        row.push(1); // 每行的最后一个元素为1
        triangle.push(row);
    }

    return triangle;
}

// 示例用法
const numRows = 5;
console.log(generate(numRows));

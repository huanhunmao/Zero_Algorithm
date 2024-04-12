function generate(numRows) {
    if(numRows == 0) return []

    const triangle = [[1]]

    for(let i = 1; i < numRows; i++) {
        const row = [1]
        const prevRow = triangle[i - 1]

        for(let j = 1; j < i; j++) {
            row.push(prevRow[j] + prevRow[j - 1])
        }

        row.push(1)
        triangle.push(row)
    }

    return triangle
}

// 示例用法
const numRows = 5;
console.log(generate(numRows));

// cannot mark grid[cRow][cCol] = "0" as "-1", otherwise the loop is infinitive, l didn't handle it with extra condition to pause the search
// Time complexity is O(m * n)
// Space complexity is O(m * n), call stack during recursion, if all grid is land

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0
    const row = grid.length
    const col = grid[0].length
    let numOfIslands = 0;

    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    const dfs = (cRow, cCol) => {
        if (cRow >= row || cRow < 0 || cCol >= col || cCol < 0 || grid[cRow][cCol] === "0") return
        grid[cRow][cCol] = "0"

        for (let [dirCol, dirRow] of dirs) {
            dfs(cRow + dirRow, cCol + dirCol)
        }
    }

    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1") {
                numOfIslands += 1
                dfs(i, j)
            }
        }
    }

    return numOfIslands
};
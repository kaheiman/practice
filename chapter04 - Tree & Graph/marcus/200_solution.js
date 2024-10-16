// Time complexity O(m * n)

var numIslands = function (grid) {
  let count = 0;

  function depthSearch(x, y) {
    if (x < 0 || y < 0 || x > grid.length - 1 || y > grid[x].length - 1) return
    if (grid[x][y] === '1') {
      grid[x][y] = '0';
    } else {
      return;
    }
    depthSearch(x + 1, y);
    depthSearch(x, y + 1);
    depthSearch(x - 1, y);
    depthSearch(x, y - 1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        count++;
        depthSearch(row, col);
      }
    }
  }

  return count;
}

const grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"]
]

console.log(numIslands(grid));
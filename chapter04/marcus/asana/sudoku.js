class Cell {
  constructor(value = 0, isFixed = false) {
    this.value = value; // 0 means empty
    this.isFixed = isFixed;
  }

  isEmpty() {
    return this.value === 0;
  }
}

class SudokuBoard {
  constructor(initialGrid) {
    this.grid = this.initGrid(initialGrid);
  }

  initGrid(initialGrid) {
    let grid = [];
    for (let row = 0; row < 9; row++) {
      grid[row] = [];
      for (let col = 0; col < 9; col++) {
        let val = initialGrid[row][col];
        grid[row][col] = new Cell(val, val !== 0);
      }
    }
    return grid;
  }

  getValue(row, col) {
    return this.grid[row][col].value;
  }

  setValue(row, col, val) {
    if (!this.grid[row][col].isFixed) {
      this.grid[row][col].value = val;
    }
  }

  isValid(row, col, val) {
    for (let i = 0; i < 9; i++) {
      if (this.getValue(row, i) === val || this.getValue(i, col) === val) return false;
    }
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        if (this.getValue(r, c) === val) return false;
      }
    }
    return true;
  }

  printBoard() {
    for (let row = 0; row < 9; row++) {
      console.log(this.grid[row].map(cell => cell.value || ".").join(" "));
    }
  }
}

class SudokuSolver {
  constructor(board) {
    this.board = board;
  }

  solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (this.board.grid[row][col].isEmpty()) {
          for (let num = 1; num <= 9; num++) {
            if (this.board.isValid(row, col, num)) {
              this.board.setValue(row, col, num);
              if (this.solve()) return true;
              this.board.setValue(row, col, 0); // backtrack
            }
          }
          return false; // no valid number found
        }
      }
    }
    return true; // board filled
  }
}

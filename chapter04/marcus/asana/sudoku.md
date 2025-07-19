# Sudoku Solver Implementation

## Overview

This Sudoku solver implements a **backtracking algorithm** to solve 9×9 Sudoku puzzles. The solution consists of three main classes that work together to represent, validate, and solve Sudoku puzzles.

## Architecture

### 1. Cell Class
Represents individual cells in the Sudoku grid.

**Properties:**
- `value`: The numeric value (0 for empty cells)
- `isFixed`: Boolean flag indicating if the cell is pre-filled (immutable)

**Methods:**
- `isEmpty()`: Returns true if the cell value is 0

### 2. SudokuBoard Class
Manages the 9×9 Sudoku grid and provides validation logic.

**Key Methods:**
- `initGrid(initialGrid)`: Creates a 9×9 grid of Cell objects
- `getValue(row, col)`: Returns the value at specified position
- `setValue(row, col, val)`: Sets value if cell is not fixed
- `isValid(row, col, val)`: Validates if a number can be placed at position
- `printBoard()`: Displays the current board state

**Validation Rules:**
The `isValid` method checks three Sudoku constraints:
1. **Row constraint**: No duplicate numbers in the same row
2. **Column constraint**: No duplicate numbers in the same column  
3. **Box constraint**: No duplicate numbers in the same 3×3 sub-grid

### 3. SudokuSolver Class
Implements the backtracking algorithm to solve the puzzle.

## Algorithm: Backtracking

The solver uses a **recursive backtracking** approach:

1. **Find Empty Cell**: Scan the grid to find the first empty cell (value = 0)
2. **Try Numbers**: For each number 1-9, check if it's valid to place at that position
3. **Place & Recurse**: If valid, place the number and recursively solve the rest
4. **Backtrack**: If no solution found, reset the cell to 0 and try the next number
5. **Base Case**: If no empty cells remain, the puzzle is solved

## Pseudocode

### Main Solving Algorithm
```
function solve(board):
    for row from 0 to 8:
        for col from 0 to 8:
            if board[row][col] is empty:
                for num from 1 to 9:
                    if isValid(board, row, col, num):
                        board[row][col] = num
                        if solve(board):
                            return true
                        board[row][col] = 0  // backtrack
                return false  // no valid number found
    return true  // board completely filled
```

### Validation Algorithm
```
function isValid(board, row, col, num):
    // Check row constraint
    for i from 0 to 8:
        if board[row][i] == num:
            return false
    
    // Check column constraint  
    for i from 0 to 8:
        if board[i][col] == num:
            return false
    
    // Check 3×3 box constraint
    boxRow = (row / 3) * 3
    boxCol = (col / 3) * 3
    for r from boxRow to boxRow + 2:
        for c from boxCol to boxCol + 2:
            if board[r][c] == num:
                return false
    
    return true
```

## Complexity Analysis

### Time Complexity
- **Worst Case**: O(9^(n²)) where n = 9
  - For each empty cell, we try up to 9 numbers
  - In the worst case (empty grid), this gives us 9^81 ≈ 2×10^77 operations
  - **Simplified**: O(9^81) for a 9×9 grid

- **Average Case**: Much better due to constraint propagation
  - Early pruning eliminates many invalid branches
  - Typical puzzles solve in reasonable time

### Space Complexity
- **Grid Storage**: O(n²) = O(81) = **O(1)** for fixed 9×9 grid
- **Recursion Stack**: O(n²) = O(81) = **O(1)** in worst case
  - Maximum recursion depth equals number of empty cells
  - For a 9×9 grid, this is at most 81 levels

- **Overall Space Complexity**: **O(1)** for fixed-size Sudoku

## Key Features

### Advantages
1. **Guaranteed Solution**: Will find a solution if one exists
2. **Complete Search**: Explores all possibilities through backtracking
3. **Memory Efficient**: Uses minimal extra space
4. **Simple Logic**: Easy to understand and implement

### Optimizations Implemented
1. **Early Validation**: Checks constraints before placing numbers
2. **Immediate Backtracking**: Abandons invalid paths quickly
3. **Fixed Cell Protection**: Prevents modification of pre-filled cells

### Potential Improvements
1. **Constraint Propagation**: Eliminate obvious impossible values
2. **Most Constrained Variable**: Choose cells with fewer possibilities first
3. **Forward Checking**: Look ahead to detect conflicts earlier
4. **Naked/Hidden Singles**: Apply Sudoku-specific techniques

## Usage Example

```javascript
// Create initial grid (0 represents empty cells)
const initialGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    // ... rest of the grid
];

// Initialize board and solver
const board = new SudokuBoard(initialGrid);
const solver = new SudokuSolver(board);

// Solve the puzzle
if (solver.solve()) {
    console.log("Solution found:");
    board.printBoard();
} else {
    console.log("No solution exists");
}
```

## Performance Characteristics

- **Easy Puzzles**: Solve in milliseconds
- **Hard Puzzles**: May take several seconds
- **Invalid Puzzles**: Detected through exhaustive search
- **Multiple Solutions**: Returns the first valid solution found

The algorithm's performance heavily depends on the puzzle's difficulty and the number of pre-filled cells. Puzzles with more constraints (filled cells) generally solve faster due to reduced search space. 
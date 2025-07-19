# Jigsaw Puzzle Solver

## Problem Overview

The jigsaw puzzle solver is designed to solve rectangular jigsaw puzzles by placing pieces on a grid board. Each puzzle piece has four edges (top, right, bottom, left) with specific types:

- **TAB**: An outward protruding edge
- **BLANK**: An inward indented edge  
- **FLAT**: A straight border edge (used for puzzle boundaries)

## Algorithm Explanation

The solution uses a **recursive backtracking** approach to systematically try placing pieces on the board:

1. **Edge Matching**: Pieces can only be placed if their edges fit with adjacent pieces:
   - TAB edges fit with BLANK edges
   - FLAT edges fit with other FLAT edges (at borders)
   - Border pieces must have FLAT edges on the puzzle boundary

2. **Rotation**: Each piece can be rotated 0°, 90°, 180°, or 270° to try different orientations

3. **Backtracking**: If a placement doesn't lead to a solution, the algorithm backtracks and tries the next possibility

## Pseudo Code

```
ALGORITHM SolvePuzzle(pieces, rows, cols)
INPUT: 
  - pieces: Array of puzzle pieces
  - rows, cols: Dimensions of the puzzle board
OUTPUT: 
  - Boolean indicating if puzzle is solvable
  - Solved board configuration

BEGIN
  board = CreateBoard(rows, cols)
  usedPieces = EmptySet()
  
  RETURN SolveRecursive(0, 0, board, pieces, usedPieces)
END

ALGORITHM SolveRecursive(row, col, board, pieces, usedPieces)
BEGIN
  // Base case: All positions filled
  IF row >= board.rows THEN
    RETURN true
  END IF
  
  // Calculate next position
  nextRow = row
  nextCol = col + 1
  IF nextCol >= board.cols THEN
    nextRow = row + 1
    nextCol = 0
  END IF
  
  // Try each unused piece
  FOR each piece IN pieces DO
    IF piece.id NOT IN usedPieces THEN
      
      // Try all 4 rotations (0°, 90°, 180°, 270°)
      FOR rotation = 0 TO 3 DO
        
        IF CanPlacePiece(row, col, piece, board) THEN
          // Place piece and mark as used
          PlacePiece(row, col, piece, board)
          ADD piece.id TO usedPieces
          
          // Recursively solve remaining positions
          IF SolveRecursive(nextRow, nextCol, board, pieces, usedPieces) THEN
            RETURN true
          END IF
          
          // Backtrack: remove piece and unmark
          RemovePiece(row, col, board)
          REMOVE piece.id FROM usedPieces
        END IF
        
        RotatePiece(piece, 90°)  // Try next rotation
      END FOR
    END IF
  END FOR
  
  RETURN false  // No valid placement found
END

ALGORITHM CanPlacePiece(row, col, piece, board)
BEGIN
  // Check top neighbor compatibility
  IF row > 0 AND board[row-1][col] != null THEN
    IF NOT piece.topEdge.FitsWith(board[row-1][col].bottomEdge) THEN
      RETURN false
    END IF
  ELSE IF row = 0 AND piece.topEdge != FLAT THEN
    RETURN false  // Top border must be flat
  END IF
  
  // Check left neighbor compatibility
  IF col > 0 AND board[row][col-1] != null THEN
    IF NOT piece.leftEdge.FitsWith(board[row][col-1].rightEdge) THEN
      RETURN false
    END IF
  ELSE IF col = 0 AND piece.leftEdge != FLAT THEN
    RETURN false  // Left border must be flat
  END IF
  
  // Check bottom border constraint
  IF row = board.rows-1 AND piece.bottomEdge != FLAT THEN
    RETURN false
  END IF
  
  // Check right border constraint  
  IF col = board.cols-1 AND piece.rightEdge != FLAT THEN
    RETURN false
  END IF
  
  RETURN true
END
```

## How the Algorithm Works

### 1. **Initialization**
- Create an empty board grid of the specified dimensions
- Initialize a set to track which pieces have been used

### 2. **Position-by-Position Solving**
- Process positions in row-major order (left-to-right, top-to-bottom)
- For each position, try every unused puzzle piece

### 3. **Piece Placement Validation**
- **Edge Compatibility**: Check if the piece's edges match with already-placed adjacent pieces
- **Border Constraints**: Ensure border pieces have flat edges on the puzzle boundary
- **Rotation Testing**: Try all 4 possible orientations of each piece

### 4. **Recursive Exploration**
- If a piece fits, place it and recursively solve the remaining positions
- If the recursive call succeeds, the puzzle is solved
- If it fails, backtrack by removing the piece and trying the next option

### 5. **Backtracking**
- When no valid piece can be placed at a position, backtrack to the previous position
- Remove the previously placed piece and try the next available option
- Continue until a solution is found or all possibilities are exhausted

## Time and Space Complexity

### Time Complexity: **O(n! × 4^n)**

**Detailed Analysis:**
- **n!**: In the worst case, we must try all possible permutations of n pieces across n positions
- **4^n**: For each piece placement, we try up to 4 rotations
- **Position checking**: Each placement requires O(1) edge compatibility checks
- **Overall**: The algorithm has exponential time complexity, making it impractical for large puzzles

**Best Case**: O(n × 4) when the first piece tried at each position works
**Average Case**: Depends heavily on puzzle constraints and piece diversity

### Space Complexity: **O(n)**

**Breakdown:**
- **Board Storage**: O(rows × cols) = O(n) for storing piece references
- **Recursion Stack**: O(n) depth in the worst case (one recursive call per position)
- **Used Pieces Set**: O(n) to track which pieces are currently placed
- **Piece Storage**: O(n) for the input pieces array

**Note**: The space complexity is linear because we only store references to pieces, not duplicate the piece data.

## Optimization Considerations

1. **Early Termination**: The algorithm can be optimized by identifying impossible configurations early
2. **Constraint Propagation**: Pre-filtering pieces that could fit at each position
3. **Heuristics**: Prioritizing corner and edge pieces, or pieces with unique edge patterns
4. **Parallel Processing**: Multiple rotation attempts could be parallelized

## Practical Limitations

- The exponential time complexity makes this approach suitable only for small puzzles (< 100 pieces)
- For larger puzzles, more sophisticated algorithms using computer vision, genetic algorithms, or machine learning would be more appropriate

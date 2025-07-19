// Enum-like object for edge types
const EdgeType = {
  TAB: 'TAB',    // Outward edge
  BLANK: 'BLANK', // Inward edge
  FLAT: 'FLAT'   // Border edge
};

// Class to represent an edge of a puzzle piece
class Edge {
  constructor(type) {
    if (!Object.values(EdgeType).includes(type)) {
      throw new Error('Invalid edge type');
    }
    this.type = type;
  }

  // Check if this edge fits with another edge
  fitsWith(otherEdge) {
    if (!otherEdge) return false;
    if (this.type === EdgeType.FLAT && otherEdge.type === EdgeType.FLAT) return true;
    return (this.type === EdgeType.TAB && otherEdge.type === EdgeType.BLANK) ||
           (this.type === EdgeType.BLANK && otherEdge.type === EdgeType.TAB);
  }
}

// Class to represent a puzzle piece
class PuzzlePiece {
  constructor(id, top, right, bottom, left) {
    this.id = id;
    this.edges = {
      top: new Edge(top),
      right: new Edge(right),
      bottom: new Edge(bottom),
      left: new Edge(left)
    };
  }

  // Rotate the piece 90 degrees clockwise
  rotate() {
    const { top, right, bottom, left } = this.edges;
    this.edges = {
      top: left,
      right: top,
      bottom: right,
      left: bottom
    };
  }
}

// Class to represent the puzzle board
class PuzzleBoard {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array(rows).fill().map(() => Array(cols).fill(null));
  }

  // Place a piece at position (row, col)
  placePiece(row, col, piece) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols) {
      throw new Error('Invalid position');
    }
    if (this.grid[row][col]) {
      throw new Error('Position already occupied');
    }
    this.grid[row][col] = piece;
  }

  // Check if a piece fits at (row, col)
  canPlacePiece(row, col, piece) {
    // Check top neighbor
    if (row > 0 && this.grid[row - 1][col]) {
      if (!piece.edges.top.fitsWith(this.grid[row - 1][col].edges.bottom)) {
        return false;
      }
    } else if (row === 0 && piece.edges.top.type !== EdgeType.FLAT) {
      return false; // Top edge of first row must be flat
    }

    // Check left neighbor
    if (col > 0 && this.grid[row][col - 1]) {
      if (!piece.edges.left.fitsWith(this.grid[row][col - 1].edges.right)) {
        return false;
      }
    } else if (col === 0 && piece.edges.left.type !== EdgeType.FLAT) {
      return false; // Left edge of first column must be flat
    }

    // For bottom and right edges, check if they are flat for border pieces
    if (row === this.rows - 1 && piece.edges.bottom.type !== EdgeType.FLAT) {
      return false; // Bottom edge of last row must be flat
    }
    if (col === this.cols - 1 && piece.edges.right.type !== EdgeType.FLAT) {
      return false; // Right edge of last column must be flat
    }

    return true;
  }

  // Remove a piece from position (row, col)
  removePiece(row, col) {
    if (this.grid[row][col]) {
      this.grid[row][col] = null;
    }
  }
}

// Class to manage puzzle solving
class PuzzleSolver {
  constructor(pieces, rows, cols) {
    this.pieces = pieces;
    this.board = new PuzzleBoard(rows, cols);
    this.usedPieces = new Set();
  }

  solve() {
    return this.solveRecursive(0, 0);
  }

  // Recursive backtracking to solve the puzzle
  solveRecursive(row, col) {
    if (row >= this.board.rows) {
      return true; // All pieces placed successfully
    }

    // Move to next position
    let nextRow = row;
    let nextCol = col + 1;
    if (nextCol >= this.board.cols) {
      nextRow++;
      nextCol = 0;
    }

    // Try each unused piece
    for (let piece of this.pieces) {
      if (this.usedPieces.has(piece.id)) continue;

      // Try all rotations (0, 90, 180, 270 degrees)
      for (let i = 0; i < 4; i++) {
        if (this.board.canPlacePiece(row, col, piece)) {
          this.board.placePiece(row, col, piece);
          this.usedPieces.add(piece.id);

          if (this.solveRecursive(nextRow, nextCol)) {
            return true;
          }

          // Backtrack
          this.board.removePiece(row, col);
          this.usedPieces.delete(piece.id);
        }
        piece.rotate(); // Try next rotation
      }
    }

    return false; // No solution found
  }
}
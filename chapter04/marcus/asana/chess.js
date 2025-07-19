class Position {
  constructor(row, col) {
    this.row = row;  // 0 to 7
    this.col = col;  // 0 to 7
  }

  isEqual(other) {
    return this.row === other.row && this.col === other.col;
  }
}

class Piece {
  constructor(color) {
    this.color = color; // 'white' or 'black'
  }

  getLegalMoves(position, board) {
    throw "Not implemented";
  }

  isMoveValid(from, to, board) {
    return this.getLegalMoves(from, board).some(p => p.isEqual(to));
  }
}

class King extends Piece { /* 8 directions, castling */ }
class Queen extends Piece { /* rook + bishop */ }
class Rook extends Piece { /* straight lines */ }
class Bishop extends Piece { /* diagonals */ }
class Knight extends Piece { /* L-shaped */ }
class Pawn extends Piece { /* forward, capture diagonally */ }

class Board {
  constructor() {
    this.grid = this.initBoard(); // 8x8 matrix of Pieces or null
  }

  initBoard() {
    // Place pieces in starting positions
  }

  getPiece(position) {
    return this.grid[position.row][position.col];
  }

  movePiece(from, to) {
    let piece = this.getPiece(from);
    if (piece && piece.isMoveValid(from, to, this)) {
      this.grid[to.row][to.col] = piece;
      this.grid[from.row][from.col] = null;
    } else {
      throw new Error("Invalid move");
    }
  }

  clone() {
    // Deep copy board state for simulation
  }

  isInCheck(color) {
    // Determine if 'color' king is under attack
  }

  isCheckmate(color) {
    // True if in check and no legal moves
  }
}

class Game {
  constructor() {
    this.board = new Board();
    this.currentTurn = 'white';
  }

  makeMove(from, to) {
    let piece = this.board.getPiece(from);
    if (piece.color !== this.currentTurn) {
      throw new Error("Not your turn");
    }

    this.board.movePiece(from, to);
    this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
  }

  isGameOver() {
    return this.board.isCheckmate('white') || this.board.isCheckmate('black');
  }
}

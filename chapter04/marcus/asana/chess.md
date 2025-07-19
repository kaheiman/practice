# Chess Game Implementation

## Overview

This chess implementation follows an object-oriented design pattern with clear separation of concerns. The system is composed of four main classes that work together to create a fully functional chess game.

## Architecture

### Class Hierarchy

```
Position
├── Basic coordinate system (row, col)
└── Position comparison methods

Piece (Abstract Base Class)
├── King
├── Queen  
├── Rook
├── Bishop
├── Knight
└── Pawn

Board
├── 8x8 grid management
├── Piece movement validation
├── Game state tracking
└── Check/Checkmate detection

Game
├── Turn management
├── Move orchestration
└── Game over detection
```

## How It Works

### 1. Position System
- Uses a coordinate system with row and col (0-7)
- Provides equality comparison for move validation
- Abstracts board positioning from piece logic

### 2. Piece Movement System
- Each piece type inherits from base `Piece` class
- Implements `getLegalMoves()` to define movement patterns
- Uses `isMoveValid()` to validate specific moves
- Supports polymorphic behavior for different piece types

### 3. Board Management
- Maintains 8x8 grid of pieces or null values
- Handles piece placement and movement
- Validates moves before execution
- Tracks game state for check/checkmate detection

### 4. Game Flow
- Alternates turns between white and black
- Validates player ownership of pieces
- Orchestrates move execution through board
- Detects game over conditions

## Pseudo Code

### Core Movement Algorithm

```
FUNCTION makeMove(from, to):
    piece = board.getPiece(from)
    
    // Validate turn
    IF piece.color != currentTurn:
        THROW "Not your turn"
    
    // Validate and execute move
    board.movePiece(from, to)
    
    // Switch turns
    currentTurn = (currentTurn == 'white') ? 'black' : 'white'
```

### Move Validation

```
FUNCTION isMoveValid(from, to, board):
    legalMoves = getLegalMoves(from, board)
    
    FOR each position IN legalMoves:
        IF position.isEqual(to):
            RETURN true
    
    RETURN false
```

### Check Detection

```
FUNCTION isInCheck(color):
    kingPosition = findKing(color)
    
    FOR each enemy piece ON board:
        enemyMoves = piece.getLegalMoves(piece.position, board)
        
        FOR each move IN enemyMoves:
            IF move.isEqual(kingPosition):
                RETURN true
    
    RETURN false
```

### Checkmate Detection

```
FUNCTION isCheckmate(color):
    IF NOT isInCheck(color):
        RETURN false
    
    FOR each piece OF color ON board:
        legalMoves = piece.getLegalMoves(piece.position, board)
        
        FOR each move IN legalMoves:
            // Simulate move
            tempBoard = board.clone()
            tempBoard.movePiece(piece.position, move)
            
            // Check if still in check after move
            IF NOT tempBoard.isInCheck(color):
                RETURN false
    
    RETURN true
```

## Time and Space Complexity Analysis

### Space Complexity

| Component | Space Complexity | Description |
|-----------|------------------|-------------|
| **Board Storage** | O(1) | Fixed 8×8 grid = 64 positions |
| **Piece Objects** | O(1) | Maximum 32 pieces on board |
| **Position Objects** | O(1) | Lightweight coordinate storage |
| **Game State** | O(1) | Turn tracking and flags |
| **Total Space** | **O(1)** | **Constant space regardless of game length** |

### Time Complexity

#### Basic Operations

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| **Position.isEqual()** | O(1) | Simple coordinate comparison |
| **Board.getPiece()** | O(1) | Direct array access |
| **Board.movePiece()** | O(P) | P = average moves per piece |

#### Move Generation

| Piece Type | getLegalMoves() | Description |
|------------|----------------|-------------|
| **Pawn** | O(1) | 1-4 possible moves |
| **King** | O(1) | Up to 8 adjacent squares |
| **Knight** | O(1) | Up to 8 L-shaped moves |
| **Rook** | O(k) | k = distance to board edge (max 7) |
| **Bishop** | O(k) | k = distance to board edge (max 7) |
| **Queen** | O(k) | k = distance to board edge (max 7) |

#### Complex Operations

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| **Move Validation** | O(P) | P = legal moves for piece |
| **Check Detection** | O(N × P) | N = pieces on board, P = avg moves |
| **Checkmate Detection** | O(N × P × M) | M = moves to simulate |

Where:
- N ≤ 32 (maximum pieces on board)
- P ≤ 27 (maximum moves for queen in center)
- k ≤ 7 (maximum distance on 8×8 board)

#### Worst Case Scenarios

```
Check Detection: O(32 × 27) = O(864) = O(1)
Checkmate Detection: O(32 × 27 × 27) = O(23,328) = O(1)
```

Since chess has fixed board dimensions and piece limits, all operations are effectively **O(1)** constant time.

## Performance Characteristics

### Best Case Performance
- **Simple moves**: O(1) - Direct piece movement
- **Early checkmate detection**: O(1) - Few pieces, quick detection

### Average Case Performance
- **Mid-game moves**: O(1) - Moderate piece interaction
- **Check detection**: O(1) - Standard piece distribution

### Worst Case Performance
- **Late game analysis**: O(1) - Multiple pieces, complex positions
- **Checkmate verification**: O(1) - All possible moves evaluated

## Optimization Opportunities

### 1. Move Pre-computation
```javascript
// Cache legal moves until board state changes
class Piece {
    constructor() {
        this.cachedMoves = null;
        this.cacheValid = false;
    }
}
```

### 2. Incremental Check Detection
```javascript
// Track attacking pieces instead of full board scan
class Board {
    constructor() {
        this.attackingPieces = new Set();
    }
}
```

### 3. Bitboard Representation
```javascript
// Use bit manipulation for faster operations
class BitBoard {
    constructor() {
        this.whitePieces = 0n;  // 64-bit integer
        this.blackPieces = 0n;
    }
}
```

## Memory Usage Estimation

- **Position objects**: 64 × 8 bytes = 512 bytes
- **Piece objects**: 32 × 16 bytes = 512 bytes  
- **Board grid**: 64 × 8 bytes = 512 bytes
- **Game state**: ~100 bytes
- **Total**: ~1.6 KB per game instance

## Conclusion

This chess implementation prioritizes code clarity and maintainability over raw performance. The object-oriented design makes it easy to extend with new features like:
- Move history tracking
- Undo/redo functionality  
- AI player integration
- Network multiplayer support

The constant time complexity for all operations makes this suitable for real-time gameplay, with room for optimization as needed. 
// Backtracking technique
// Be careful js set cannot add array => set.add([1,2]) and set.has([1,2])
// Be careful set.has(`${currRow}-${curCol}` to prevent cycle
// Time complexity O(M * N * dfs) => O(M * N * 4^N)
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	let col = board[0].length;
	let row = board.length;
	let wordLen = word.length;
	let set = new Set();

	const dfs = (currRow, curCol, currWordLen) => {
		// base case
		if (currWordLen === wordLen) return true;
		// track out of boundaries
		if (
			currRow < 0 ||
			currRow >= row ||
			curCol < 0 ||
			curCol >= col ||
			word[currWordLen] !== board[currRow][curCol] ||
			set.has(`${currRow}-${curCol}`)
		)
			return false;

		set.add(`${currRow}-${curCol}`);

		let result =
			dfs(currRow + 1, curCol, currWordLen + 1) ||
			dfs(currRow - 1, curCol, currWordLen + 1) ||
			dfs(currRow, curCol + 1, currWordLen + 1) ||
			dfs(currRow, curCol - 1, currWordLen + 1);

		set.delete(`${currRow}-${curCol}`);
		return result;
	};

	for (r = 0; r < row; r++) {
		for (c = 0; c < col; c++) {
			// wordLen starting from 0
			if (dfs(r, c, 0)) return true;
		}
	}

	return false;
};


/**
 * Finds the winner, if any, of the 4x4 tic tac toe board.
 * Example board:
 *      [
 *          ['X', 'O', 'X', 'X'],
 *          ['', 'X', 'O', ''],
 *          ['X', 'O', 'X', ''],
 *          ['O', 'O', '', 'X']
 *      ]
 */
function checkWinner(board: string[][]): string | false {
    // horizontal/vertical condition
    for (let i = 0; i < 4; i++){
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][2] == board[i][3] && board[i][0]){
            return board[i][0]
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[2][i] == board[3][i] && board[0][i]){
            return board[0][i]
        }
    }
    // diagonal condition
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] == board[3][3] && board[0][0]){
        return board[0][0]
    }
    if (board[0][3] == board[1][2] && board[1][2] == board[2][1] && board[2][1] == board[3][0] && board[0][3]){
        return board[0][3]
    }
    // 4 corners condition
    if (board[0][0] == board[0][3] && board[0][3] == board[3][0] && board[3][0] == board[3][3] && board[0][0]){
        return board[0][0]
    }
    // 2x2 box condition
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j] == board[i+1][j] && board[i+1][j] == board[i+1][j+1] && board[i+1][j+1] == board[i][j+1] && board[i][j]){
                return board[i][j]
            }
        }
    }
    return false
}

/**
 * Checks if there are any possible moves left based on the tic tac toe board.
 */
function anyMovesLeft(board: string[][]): boolean {
    for (const row of board){
        for (const cell of row){
            if (!cell) {
                return true
            }
        }
    }
    return false
}

/**
 * Checks if the game is over (there is a winner or there are no moves left).
 */
function isGameOver(board: string[][]): boolean {
    return !anyMovesLeft(board) || checkWinner(board) != false
}

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let i=0;i<board.length;i++){
            const newSet = new Set();
            for(let j=0;j<board.length;j++){
                if(board[i][j]===".") continue
                if(newSet.has(board[i][j])) return false;
                newSet.add(board[i][j]);
            }
        }

        for(let col=0; col<board.length; col++){
            let newSet = new Set();
            for(let i=0; i<board.length; i++){
                if(board[i][col]===".") continue
                if(newSet.has(board[i][col])) return false;
                newSet.add(board[i][col]);
            }
        }
        for (let square=0; square<board.length; square++){
            let newSet = new Set();
            for(let i=0; i<3; i++){
                for(let j=0; j<3; j++){
                    const row = Math.floor(square/3)*3 + i;
                    const col = (square%3)*3 +j;
                    if(board[row][col]===".") continue;
                    if(newSet.has(board[row][col])) return false;
                    newSet.add(board[row][col]);
                }
            }
        }
        return true;
    }
}

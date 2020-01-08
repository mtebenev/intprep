/**
 * https://leetcode.com/problems/word-search/
 * tags: medium, backtracking
 */
describe('Word search', () => {
  const testBoard = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ];

  test('Case 1', () => {
    expect(WordSearch.exists(testBoard, 'ABCCED')).toBeTruthy();
  });
  test('Case 2', () => {
    expect(WordSearch.exists(testBoard, 'SEE')).toBeTruthy();
  });
  test('Case 3', () => {
    expect(WordSearch.exists(testBoard, 'ABCB')).toBeFalsy();
  });
});

class WordSearch {
  public static exists(board: string[][], word: string): boolean {
    if(board === null || board.length === 0 || board[0].length === 0 || word === null || word.length === 0) {
      return false;
    }
    // Find the first letter
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[0].length; j++) {
        if(board[i][j] === word[0]) {
          if(this.existsR(board, i, j, word)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  private static existsR(board: string[][], i: number, j: number, word: string): boolean {
    if(word.length === 0) {
      return true;
    }
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
      return false;
    }

    if(word[0] === board[i][j]) {
      board[i][j] = '.';
      const reminder = word.substr(1);
      let result = this.existsR(board, i - 1, j, reminder);
      if(!result) {
        result = this.existsR(board, i + 1, j, reminder);
      }
      if(!result) {
        result = this.existsR(board, i, j - 1, reminder);
      }
      if(!result) {
        result = this.existsR(board, i, j + 1, reminder);
      }

      board[i][j] = word[0];
      return result;
    }

    return false;
  }

}

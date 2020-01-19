/**
 * https://leetcode.com/problems/word-search-ii/solution/
 * tags: hard, backtracking, true
 * TODO: Trie solution
 */
describe('Word search 2', () => {
  test('Case 1', () => {
    const board = [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v']];
    const result = WordSearch2.findWords(board, ['oath', 'pea', 'eat', 'rain']);
    expect(result).toEqual(['oath', 'eat']);
  });
  test('Case 2', () => {
    const board = [[]];
    const result = WordSearch2.findWords(board, ['oath', 'pea', 'eat', 'rain']);
    expect(result).toEqual([]);
  });
});

class WordSearch2 {
  public static findWords(board: string[][], words: string[]): string[] {

    const result = [];
    for(const w of words) {
      if(this.findSingleWord(board, w)) {
        result.push(w);
      }
    }
    return result;
  }

  private static findSingleWord(board: string[][], word: string): boolean {
    const width = board[0].length;
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < width; j++) {
        if(board[i][j] === word[0]) {
          if(this.dfs(board, i, j, word)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  private static dfs(board: string[][], i: number, j: number, word: string): boolean {
    if(word.length === 0) {
      return true;
    }
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] === '.') {
      return false;
    }

    let isFound = false;
    const sym = board[i][j];
    if(sym === word[0]) {
      const nextW = word.substr(1);
      board[i][j] = '.';
      isFound = this.dfs(board, i - 1, j, nextW)
        || this.dfs(board, i + 1, j, nextW)
        || this.dfs(board, i, j - 1, nextW)
        || this.dfs(board, i, j + 1, nextW);

      board[i][j] = sym;
    }
    return isFound;
  }
}

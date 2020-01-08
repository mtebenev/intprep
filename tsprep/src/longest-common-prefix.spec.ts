/**
 * https://leetcode.com/problems/longest-common-prefix/
 * tags: easy, string
 * TODO: There are other INTERESTING solutions.
 */
describe('Longest common prefix', () => {
  test('Case 1', () => {
    expect(LongestCommonPrefix.longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
  });
  test('Case 2', () => {
    expect(LongestCommonPrefix.longestCommonPrefix(["dog","racecar","car"])).toEqual('');
  });
});

class LongestCommonPrefix {
  public static longestCommonPrefix(strs: string[]): string {
    if(strs === null || strs.length === 0) {
      return '';
    }
    let result = '';
    let counter = 0;
    let pos = 0;
    do {
      counter = 0;
      let symbol = '';
      for (let i = 0; i < strs.length; i++) {
        if(strs[i].length === pos) {
          return result;
        }
        if(i === 0) {
          symbol = strs[i][pos];
          counter = 1;
        } else {
          if(symbol !== strs[i][pos]) {
            return result;
          } else {
            counter++;
          }
        }
      }
      if(counter === strs.length) {
        result += symbol;
      }
      pos++;
    } while(true);
  }
}

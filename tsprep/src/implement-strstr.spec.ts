/**
 * https://leetcode.com/problems/implement-strstr/
 * tags: easy, string
 * TODO: https://leetcode.com/problems/implement-strstr/solution/ contains another interesting solution.
 */
describe('Implmenet strStr', () => {
  test('Case 1', () => {
    expect(ImplementStrStr.strStr('hellow', 'll')).toEqual(2);
  });
  test('Case 2', () => {
    expect(ImplementStrStr.strStr('aaaaaa', 'bba')).toEqual(-1);
  });
  test('Case 3', () => {
    expect(ImplementStrStr.strStr('aabaaa', 'aaa')).toEqual(3);
  });
  test('Case 4', () => {
    expect(ImplementStrStr.strStr('', 'aaa')).toEqual(-1);
  });
  test('Case 5', () => {
    expect(ImplementStrStr.strStr('a', 'aaa')).toEqual(-1);
  });
  test('Case 6', () => {
    expect(ImplementStrStr.strStr('mississippi', 'issip')).toEqual(4);
  });
});

class ImplementStrStr {

  public static strStr(haystack: string, needle: string): number {
    if(needle.length === 0) {
      return 0;
    }
    let pos1 = 0;
    let pos2 = 0;

    while(pos1 < haystack.length && pos2 < needle.length) {
      if(haystack[pos1] === needle[pos2]) {
        pos1++;
        pos2++;
      } else {
        pos1 = pos1 - pos2 + 1;
        pos2 = 0;
      }
    }

    if(pos2 === needle.length) {
      return pos1 - needle.length;
    }
    return - 1;
  }
}

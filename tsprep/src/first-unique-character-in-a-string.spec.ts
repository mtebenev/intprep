/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * tags: easy, string
 */
describe('First unique character in a string', () => {
  test('Case 1', () => {
    expect(firstUniqChar('leetcode')).toEqual(0);
  });

  test('Case 2', () => {
    expect(firstUniqChar('loveleetcode')).toEqual(2);
  });
});

function firstUniqChar(s: string): number {
  const charMap: {[idx:string]: number} = {};
  for(let i = 0; i < s.length; ++i) {
    if(charMap[s[i]] === undefined) {
      charMap[s[i]] = 1;
    } else {
      charMap[s[i]]++;
    }
  }
  for(let i = 0; i < s.length; ++i) {
    if(charMap[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

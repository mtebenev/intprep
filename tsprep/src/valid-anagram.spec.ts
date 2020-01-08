/**
 * https://leetcode.com/problems/valid-anagram/
 * tags: easy, string
 */
describe('Valid anagram', () => {
  test('Case 1', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
  });

  test('Case 2', () => {
    expect(isAnagram('rat', 'car')).toBeFalsy();
  });
});

function isAnagram(s: string, t: string): boolean {

  if(s.length !== t.length) {
    return false;
  }

  const mapS: {[idx: string]: number} = {};
  for(let i = 0; i < s.length; ++i) {
    if(mapS[s[i]] === undefined) {
      mapS[s[i]] = 1;
    } else {
      mapS[s[i]]++;
    }
  }

  const mapT: {[idx: string]: number} = {};
  for(let i = 0; i < t.length; ++i) {
    if(mapT[t[i]] === undefined) {
      mapT[t[i]] = 1;
    } else {
      mapT[t[i]]++;
    }
  }

  for (const k in mapS) {
    if(mapS[k] !== mapT[k]) {
      return false;
    }
  }

  return true;
}

/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 */
describe('Longest palindromic substring', () => {
  test('Case 1', () => {
    expect(longestPalindrome('babad')).toEqual('bab');
  });
  test('Case 2', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb');
  });
});

function longestPalindrome(s: string): string {
  let longest = '';
  for(let i = 0; i < s.length; i++) {
    const tmpLongest = getLongestAtPosition(s, i, i);
    const tmpLongest2 = getLongestAtPosition(s, i, i + 1);
    if(tmpLongest.length > longest.length) {
      longest = tmpLongest;
    }
    if(tmpLongest2.length > longest.length) {
      longest = tmpLongest2;
    }
  }

  return longest;
}

function getLongestAtPosition(s: string, l: number, r: number): string {
  while(l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return s.substring(l + 1, r);
}

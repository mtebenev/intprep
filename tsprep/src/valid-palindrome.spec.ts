/**
 * https://leetcode.com/problems/valid-palindrome/
 * tags: easy, string
 */
describe('Valid palindrome', () => {
  test('Case 1', () => {
    expect(ValidPalindrome.isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });
  test('Case 2', () => {
    expect(ValidPalindrome.isPalindrome('race a car')).toBeFalsy();
  });
});

class ValidPalindrome {
  public static isPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    do {
      while(l < s.length && !this.isAlphanumeric(s[l])) {
        l++;
      }
      while(r > 0 && !this.isAlphanumeric(s[r])) {
        r--;
      }
      if(l < r) {
        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
          return false;
        }
      }
      l++;
      r--;
    } while(l < r);

    return true;
  }

  private static isAlphanumeric(s: string): boolean {
    for(let i = 0; i < s.length; i++) {
      const code = s.charCodeAt(i);
      if(!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  }

}

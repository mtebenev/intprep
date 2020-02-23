describe('Phone16', () => {
  test('Palindrome 1', () => {
    expect(Phone16.validPalindrome('aba')).toBeTruthy();
  });
  test('Palindrome 2', () => {
    expect(Phone16.validPalindrome('abca')).toBeTruthy();
  });
  test('Palindrome 3', () => {
    expect(Phone16.validPalindrome('0110010')).toBeTruthy();
  });

  test('Addop1', () => {
    const result = Phone16.addOperators('123', 6);
    expect(result.length).toEqual(2);
    expect(result).toContain('1+2+3');
    expect(result).toContain('1*2*3');
  });
  test('Addop2', () => {
    const result = Phone16.addOperators('232', 8);
    expect(result.length).toEqual(2);
    expect(result).toContain('2*3+2');
    expect(result).toContain('2+3*2');
  });
});

class Phone16 {
  /**
   * https://leetcode.com/problems/valid-palindrome-ii/
   * tags: easy, string
   */
  public static validPalindrome(s: string): boolean {
    if(s === null || s === undefined) {
      return false;
    }
    let lo = 0;
    let hi = s.length - 1;
    while(lo < hi) {
      if(s[lo] !== s[hi]) {
        if(this.isValid2(s, lo + 1, hi)
          || this.isValid2(s, lo, hi - 1)) {
          return true;
        } else {
          return false;
        }
      }
      lo++;
      hi--;
    }

    return true;
  }

  public static isValid2(s: string, left: number, right: number): boolean {
    let lo = left;
    let hi = right;

    while(lo < hi) {
      if(s[lo] !== s[hi]) {
        return false;
      }
      lo++;
      hi--;
    }

    return true;
  }

  public static addOperators(num: string, target: number): string[] {
    const result: string[] = [];
    const nextNum = Number.parseInt(num[0], 10);
    this.addOperatorsR(num, target, nextNum, num[0], 1, result);

    return result;
  }

  public static addOperatorsR(
    num: string, target: number, currentValue: number, currentStr: string, idx: number, result: string[]): void {
    if(idx === num.length) {
      if(currentValue === target) {
        result.push(currentStr);
      }
      return;
    }

    const nextNum = Number.parseInt(num[idx], 10);
    this.addOperatorsR(num, target, currentValue + nextNum, currentStr + '+' + nextNum, idx + 1, result);
    this.addOperatorsR(num, target, currentValue * nextNum, currentStr + '*' + nextNum, idx + 1, result);
    this.addOperatorsR(num, target, currentValue - nextNum, currentStr + '-' + nextNum, idx + 1, result);
  }
}

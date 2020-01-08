/**
 * https://leetcode.com/problems/roman-to-integer/
 * tags: easy, string, math
 */
describe('Roman to integer', () => {
  test('Case 1', () => {
    expect(RomanToInteger.romanToInt('III')).toEqual(3);
  });
  test('Case 2', () => {
    expect(RomanToInteger.romanToInt('IV')).toEqual(4);
  });
  test('Case 3', () => {
    expect(RomanToInteger.romanToInt('IX')).toEqual(9);
  });
  test('Case 4', () => {
    expect(RomanToInteger.romanToInt('LVIII')).toEqual(58);
  });
  test('Case 5', () => {
    expect(RomanToInteger.romanToInt('MCMXCIV')).toEqual(1994);
  });
  test('Case 6', () => {
    expect(RomanToInteger.romanToInt('')).toEqual(0);
  });
});

class RomanToInteger {
  public static romanToInt(s: string): number {
    const tokens = [
      {t: 'CM', v: 900},
      {t: 'M', v: 1000},
      {t: 'CD', v: 400},
      {t: 'D', v: 500},
      {t: 'XC', v: 90},
      {t: 'C', v: 100},
      {t: 'XL', v: 40},
      {t: 'L', v: 50},
      {t: 'IX', v: 9},
      {t: 'X', v: 10},
      {t: 'IV', v: 4},
      {t: 'V', v: 5},
      {t: 'I', v: 1},
    ];
    let pos = 0;
    let result = 0;
    while(pos < s.length) {
      const t = tokens.find(x => s.substr(pos).indexOf(x.t) === 0);
      if(t === undefined) {
        return -1;
      }
      result += t.v;
      pos += t.t.length;
    }

    return result;
  }
}

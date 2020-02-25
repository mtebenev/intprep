import {TreeNode} from '../utils/tree-node';

describe('Phone17', () => {
  test('num 1', () => {
    expect(Phone17.confusingNumber(916)).toBeFalsy();
    expect(Phone17.confusingNumber(379)).toBeFalsy();
    expect(Phone17.confusingNumber(89)).toBeTruthy();
    expect(Phone17.confusingNumber(906)).toBeFalsy();
  });
});

class Phone17 {
  /**
   * https://leetcode.com/problems/confusing-number/
   * tags: easy, string
   * Note: this is sub-optimal solution:
   * No need to include 'x' in the map - we can iterate the number and check the map.
   */
  public static confusingNumber(N: number): boolean {
    if(N === 0) {
      return false;
    }
    const m: any = {
      '1': '1',
      '2': 'x',
      '3': 'x',
      '4': 'x',
      '5': 'x',
      '6': '9',
      '7': 'x',
      '8': '8',
      '9': '6',
      '0': '0'
    };
    const s = N.toString().split('').reverse().map(x => m[x]);
    if(s.includes('x')) {
      return false;
    }

    const s2 = s.join('');
    const n2 = parseInt(s2, 10);
    const result = N !== n2 ? true : false;
    return result;
  }
}

import {TreeNode} from '../utils/tree-node';

describe('Phone22', () => {
  test('digits 1', () => {
    expect(Phone22.addDigits(2)).toEqual(2);
  });
  test('digits 2', () => {
    expect(Phone22.addDigits(22)).toEqual(4);
  });
  test('digits 3', () => {
    expect(Phone22.addDigits(38)).toEqual(2);
  });
  test('digits 4', () => {
    expect(Phone22.addDigits(0)).toEqual(0);
  });
});

class Phone22 {
  /**
   * https://leetcode.com/problems/add-digits/
   * tags: easy, math
   */
  public static addDigits_x(num: number): number {
    let result = num;
    let current = num.toString();
    while(current.length > 1) {
      const nextSum = Array
        .from(current)
        .map(x => parseInt(x, 10))
        .reduce((prev, cur) => prev + cur);
      current = nextSum.toString();
      result = nextSum;
    }

    return result;
  }

  /**
   * https://en.wikipedia.org/wiki/Digital_root
   */
  public static addDigits(num: number): number {
    const result = 1 + (num - 1) % 9;
    return result;
  }
}

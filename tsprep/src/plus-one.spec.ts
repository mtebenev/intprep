/**
 * https://leetcode.com/problems/plus-one/
 * tags: easy, array
 */
describe('Plus one', () => {
  test('Case 1', () => {
    expect(PlusOne.plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });
  test('Case 2', () => {
    expect(PlusOne.plusOne([3, 9, 9])).toEqual([4, 0, 0]);
  });
  test('Case 3', () => {
    expect(PlusOne.plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});

class PlusOne {
  public static plusOne(digits: number[]): number[] {
    let carry = 1;
    let position = digits.length - 1;
    while(carry > 0 && position >= 0) {
      digits[position] += carry;
      carry = 0;
      if(digits[position] >= 10) {
        carry = Math.floor(digits[position] / 10);
        digits[position] = digits[position] - 10;
        position--;
      }
    }

    if(carry > 0 && position < 0) {
      digits.splice(0, 0, carry);
    }
    return digits;
  }
}

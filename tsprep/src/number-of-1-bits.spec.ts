/**
 * https://leetcode.com/problems/number-of-1-bits/
 * tags: easy, bit manipulation
 */
describe('Number of 1 bits', () => {
  test('Case 1', () => {
    expect(NumberOf1Bits.hamminWeight(0b00000000000000000000000000001011)).toEqual(3);
  });
});

class NumberOf1Bits {
  public static hamminWeight(n: number): number {

    let counter = 0;
    let value = n;
    while(value !== 0) {
      if(value & 1) {
        counter++;
      }
      value >>>= 1;
    }

    return counter;
  }
}

/**
 * https://leetcode.com/problems/reverse-bits/
 * tags: easy, bit manipulation
 */
describe('Reverse bits', () => {
  test('Case 1', () => {
    expect(ReverseBits.reverseBits(43261596)).toEqual(964176192);
  });
});

class ReverseBits {
  public static reverseBits(n: number): number {
    let result = 0;
    for(let i = 0; i < 32; ++i) {
      result = result << 1;
      result = result | (n & 1);
      n = n >>> 1;
    }
    return result >>> 0;
  }
}

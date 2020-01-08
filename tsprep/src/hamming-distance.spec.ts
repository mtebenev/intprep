/**
 * https://leetcode.com/problems/hamming-distance/
 * tags: easy, bit manipulation
 */
describe('Hamming distance', () => {
  test('Case 1', () => {
    expect(HammingDistance.hammingDistance(1, 4)).toEqual(2);
  });
});

class HammingDistance {
  public static hammingDistance(x: number, y: number): number {
    let counter = 0;
    let value = x ^ y;
    while(value !== 0) {
      if(value & 1) {
        counter++;
      }
      value >>>= 1;
    }
    return counter;
  }
}

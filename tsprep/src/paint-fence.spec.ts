/**
 * https://leetcode.com/problems/paint-fence/
 * tags: easy, dynamic programming
 * Thoughts: it just looks easy, but it's not.
 * I had to figure out the following IMPORTANT points (S - same, D - different):
 * 1. In this approach we are counting only valid ways: to add a different color or the same color.
 * So the R(n) = S(n) + D(n)
 * 2. To add a different color from N options: D(N) = T(N-1) * (k -1). For example (k=3):
 * we have one fence. We can add a different with only 1 * (k-1).
 * 3. S(n) = D(n - 1). Because every different combination will produce same number (or one per combination)
 * same color.
 */
describe('Paint fence', () => {
  test('Case 1', () => {
    expect(PaintFence.numWays(3, 2)).toEqual(6);
  });
  test('Case 2', () => {
    expect(PaintFence.numWays(3, 1)).toEqual(0);
  });
  test('Case 3', () => {
    expect(PaintFence.numWays(1, 1)).toEqual(1);
  });
  test('Case 4', () => {
    expect(PaintFence.numWays(2, 1)).toEqual(1);
  });
  test('Case 5', () => {
    expect(PaintFence.numWays(1, 2)).toEqual(2);
  });
  test('Case 6', () => {
    expect(PaintFence.numWays(4, 2)).toEqual(10);
  });
  test('Case 7', () => {
    expect(PaintFence.numWays(5, 2)).toEqual(16);
  });
  test('Case 8', () => {
    expect(PaintFence.numWays(0, 1)).toEqual(0);
  });
  test('Case 9', () => {
    expect(PaintFence.numWays(1, 0)).toEqual(0);
  });
});

class PaintFence {
  public static numWays(n: number, k: number): number {
    return this.numWaysRecursive(n, k);
  }

  public static numWaysIterative(n: number, k: number): number {
    if(n < 1) {
      return 0;
    }
    let same = 0;
    let diff = k;
    let sum = k;
    for(let i = 2; i <= n; i++) {
      same = diff;
      diff = sum * (k - 1);
      sum = same + diff;
    }
    return sum;
  }

  /**
   * Recursive based on the same logic as iterative.
   */
  public static numWaysRecursive(n: number, k: number): number {
    if(n < 1) {
      return 0;
    }
    const diff = this.calcDiffR(n, k);
    const same = this.calcSameR(n, k);
    return diff + same;
  }

  private static calcDiffR(n: number, k: number): number {
    if(n === 1) {
      return k;
    }
    const result = this.numWaysRecursive(n - 1, k) * (k - 1);
    return result;
  }
  private static calcSameR(n: number, k: number): number {
    if(n === 1) {
      return 0;
    }
    const result = this.calcDiffR(n - 1, k);
    return result;
  }
}

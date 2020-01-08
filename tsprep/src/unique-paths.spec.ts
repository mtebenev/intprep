/**
 * https://leetcode.com/problems/unique-paths/
 * tags: medium, dynamic programming
 * TODO: stucked on iterative memo step
 */
describe('Unique paths', () => {
  /*
  test('Case 1', () => {
    expect(UniquePaths.uniquePaths(3, 2)).toEqual(3);
  });
  test('Case 2', () => {
    expect(UniquePaths.uniquePaths(7, 3)).toEqual(28);
  });
  test('Case 3', () => {
    expect(UniquePaths.uniquePaths(1, 3)).toEqual(1);
  });
  */
 test('Case 4', () => {
    expect(UniquePaths.uniquePaths(3, 1)).toEqual(1);
  });

  /*
  test('Case Perf', () => {
    expect(UniquePaths.uniquePaths(16, 16)).toEqual(155117520);
  });
  */
});

class UniquePaths {
  public static uniquePaths(m: number, n: number): number {
    //return this.uniquePathsRecursive(m, n);
    return this.uniquePathsRecursiveMemo(m, n);
  }

  // Recursive
  private static uniquePathsRecursive(m: number, n: number): number {
    return this.uniquePathsRecursiveR(m, n, 0, 0);
  }
  private static uniquePathsRecursiveR(m: number, n: number, x: number, y: number): number {
    if(x === m - 1 && y === n - 1) {
      return 1;
    }
    if(x >= m || y >= n) {
      return 0;
    }
    const result = this.uniquePathsRecursiveR(m, n, x + 1, y) + this.uniquePathsRecursiveR(m, n, x, y + 1);
    return result;
  }

  // Recursive with memo
  private static uniquePathsRecursiveMemo(m: number, n: number): number {
    const rowFact = () => Array.from(Array(m).keys()).map(() => undefined);
    const memo = Array.from(Array(m).keys()).map(() => rowFact());
    return this.uniquePathsRecursiveMemoR(m, n, memo, 0, 0);
  }
  private static uniquePathsRecursiveMemoR(
    m: number,
    n: number,
    memo: Array<Array<number | undefined>>,
    x: number,
    y: number): number {
    if(x === m - 1 && y === n - 1) {
      return 1;
    }
    if(x >= m || y >= n) {
      return 0;
    }
    if(memo[x][y] !== undefined) {
      return memo[x][y]!;
    }
    const result =
      this.uniquePathsRecursiveMemoR(m, n, memo, x + 1, y)
      + this.uniquePathsRecursiveMemoR(m, n, memo, x, y + 1);
    memo[x][y] = result;

    return result;
  }

  // Iterative memo
  /*
  private static uniquePathsIterativeMemo(m: number, n: number): number {
    const rowFact = () => Array.from(Array(m).keys()).map(() => undefined);
    const memo = Array.from(Array(m).keys()).map(() => rowFact());
  }
  */
}

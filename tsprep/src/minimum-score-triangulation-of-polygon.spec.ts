/**
 * https://leetcode.com/problems/minimum-score-triangulation-of-polygon/
 * tags: medium, dp
 * TODO: Iterative bottom-up
 */
describe('Minimum score triangulation of polygon', () => {
  test('Case 1', () => {
    const arr = [1, 1, 1];
    expect(MinimumScoreTriangulationOfPolygon.minScoreTriangulation(arr)).toEqual(1);
  });
  test('Case 2', () => {
    const arr = [2, 1, 1, 3];
    expect(MinimumScoreTriangulationOfPolygon.minScoreTriangulation(arr)).toEqual(8);
  });
  test('Case 3', () => {
    const arr = [3, 7, 4, 5];
    expect(MinimumScoreTriangulationOfPolygon.minScoreTriangulation(arr)).toEqual(144);
  });
  test('Case 4', () => {
    const arr = [1, 3, 1, 4, 1, 5];
    expect(MinimumScoreTriangulationOfPolygon.minScoreTriangulation(arr)).toEqual(13);
  });
});

class MinimumScoreTriangulationOfPolygon {
  public static minScoreTriangulation(A: number[]): number {
    return this.minScoreTriangulationRecursiveMemo(A);
  }

  /**
   * Recursive up-down
   */
  public static minScoreTriangulationRecursive(A: number[]): number {
    const result = this.minScoreTriangulationRecursiveR(A, 0, A.length - 1);
    return result;
  }

  public static minScoreTriangulationRecursiveR(A: number[], left: number, right: number): number {
    if(right - left + 1 < 3) {
      return 0;
    }

    let minValue = Number.POSITIVE_INFINITY;
    for(let i = left + 1; i < right; i++) {
      const leftValue = this.minScoreTriangulationRecursiveR(A, left, i);
      const thisValue = A[left] * A[right] * A[i];
      const rightValue = this.minScoreTriangulationRecursiveR(A, i, right);
      minValue = Math.min(minValue, leftValue + thisValue + rightValue);
    }

    return minValue;
  }

  /**
   * Recursive up-down + memo
   */
  public static minScoreTriangulationRecursiveMemo(A: number[]): number {
    const rowFact = () => Array.from(Array(A.length).keys()).map(k => null);
    const memo: Array<Array<number | null>> = Array.from(Array(A.length).keys()).map(k => rowFact());

    const result = this.minScoreTriangulationRecursiveMemoR(A, memo, 0, A.length - 1);
    return result;
  }

  public static minScoreTriangulationRecursiveMemoR(
    A: number[], memo: Array<Array<number | null>>, left: number, right: number): number {

    if(memo[left][right] !== null) {
      return memo[left][right]!;
    }

    if(right - left + 1 < 3) {
      memo[left][right] = 0;
      return 0;
    }

    let minValue = Number.POSITIVE_INFINITY;
    for(let i = left + 1; i < right; i++) {
      const leftValue = this.minScoreTriangulationRecursiveMemoR(A, memo, left, i);
      const thisValue = A[left] * A[right] * A[i];
      const rightValue = this.minScoreTriangulationRecursiveMemoR(A, memo, i, right);
      minValue = Math.min(minValue, leftValue + thisValue + rightValue);
    }
    memo[left][right] = minValue;

    return minValue;
  }
}

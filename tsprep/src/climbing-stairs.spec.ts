/**
 * https://leetcode.com/problems/climbing-stairs/
 * TODO: More interesting solutions there.
 */
describe('Climbing stairs', () => {
  test('Case 1', () => {
    expect(ClimbingStairs.climbStairs(3)).toEqual(3);
  });
  test('Case 2', () => {
    expect(ClimbingStairs.climbStairs(2)).toEqual(2);
  });
  test('Case 4', () => {
    expect(ClimbingStairs.climbStairs(4)).toEqual(5);
  });
  test('Case 5', () => {
    expect(ClimbingStairs.climbStairs(1)).toEqual(1);
  });
  test('Case 4', () => {
    expect(ClimbingStairs.climbStairs(0)).toEqual(0);
  });
});

class ClimbingStairs {
  public static climbStairs(n: number): number {
    return this.climbStairsIterativeVars(n);
  }

  // Step 1: simple recursive
  private static climbStairsRecursive(n: number): number {
    return this.climbStairsRecursiveR(n, n);
  }

  private static climbStairsRecursiveR(n: number, start: number): number {
    if(start === 0) {
      return 1;
    }
    if(start < 0) {
      return 0;
    }
    const result = this.climbStairsRecursiveR(n, start - 1) + this.climbStairsRecursiveR(n, start - 2);
    return result;
  }

  // Step2: recursive + memo
  private static climbStairsRecursiveMemo(n: number): number {
    const memo = Array.from(Array(n + 1).keys()).map(() => -1);
    return this.climbStairsRecursiveMemoR(n, memo, 0);
  }
  private static climbStairsRecursiveMemoR(n: number, memo: number[], start: number): number {
    if(start === n) {
      return 1;
    }
    if(start > n) {
      return 0;
    }
    if(memo[start] !== -1) {
      return memo[start];
    }
    const result =
      this.climbStairsRecursiveMemoR(n, memo, start + 1) + this.climbStairsRecursiveMemoR(n, memo, start + 2);
    memo[start] = result;
    return result;
  }

  // Step 3: Iterative with memo
  private static climbStairsIterativeMemo(n: number): number {
    const memo = Array.from(Array(n + 1).keys()).map(() => -1);
    memo[1] = 1;
    memo[2] = 2;

    for (let i = 3; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[n];
  }

  // Step 4: Iterative vars
  private static climbStairsIterativeVars(n: number): number {
    if(n < 2) {
      return n;
    }
    let prevPrev = 1; // 1st step
    let prev = 2; // 2nd step
    let current = prev;
    for (let i = 3; i <= n; i++) {
      current = prevPrev + prev;
      prevPrev = prev;
      prev = current;
    }
    return current;
  }
}

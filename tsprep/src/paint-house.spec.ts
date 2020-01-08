/**
 * https://leetcode.com/problems/paint-house/
 * tags: easy, dynamic programming
 */
describe('Paint house', () => {
  test('Case 1', () => {
    expect(PaintHouse.minCost([[17, 2, 17], [16, 16, 5], [14, 3, 19]])).toEqual(10);
  });
  test('Case 2 (perf)', () => {
    const arr =
      [[11, 13, 20], [13, 20, 12], [15, 18, 9], [8, 1, 2], [20, 18, 20], [5, 15, 11], [2, 11, 8], [3, 20, 12], [5, 16, 14], [11, 7, 9], [16, 6, 1], [12, 9, 9], [11, 18, 13], [16, 12, 17], [8, 6, 12], [6, 5, 7], [2, 17, 4], [5, 20, 1], [4, 7, 15], [4, 16, 2], [2, 11, 20], [5, 18, 14], [11, 15, 11], [6, 6, 14], [13, 11, 19], [2, 10, 16], [3, 10, 11]];
    expect(PaintHouse.minCost(arr)).toEqual(204);
  });

});

class PaintHouse {
  public static minCost(costs: number[][]): number {
    return this.paintIterativeVars(costs);
  }

  // Step 1: simple recursive (up down) (timeout)
  public static paintRecursive(costs: number[][]): number {
    if(!costs || costs.length === 0) {
      return 0;
    }
    const minValues = costs[costs.length - 1]
      .map((cc, cIdx) => this.paintRecursiveR(costs, costs.length - 1, cIdx));

    const result = Math.min(...minValues);
    return result;
  }

  private static paintRecursiveR(costs: number[][], houseIndex: number, colorIndex: number): number {
    if(houseIndex < 0) {
      return 0;
    }
    const colorCount = costs[0].length;
    let minCost: number | undefined;
    for(let i = 0; i < colorCount; i++) {
      if(i !== colorIndex) {
        let cost = this.paintRecursiveR(costs, houseIndex - 1, i) + costs[houseIndex][colorIndex];
        if(minCost === undefined || cost < minCost) {
          minCost = cost;
        }
      }
    }
    return minCost!;
  }

  // Step 2: recursizve + memoization (perf/mem: 32/50)
  public static paintRecursiveMemo(costs: number[][]): number {
    if(!costs || costs.length === 0) {
      return 0;
    }
    const memo = Array.from(Array(costs.length + 1).keys()).map(k => [-1, -1, -1]);
    const minValues = costs[costs.length - 1]
      .map((cc, cIdx) => this.paintRecursiveRMemo(costs, memo, costs.length - 1, cIdx));

    const result = Math.min(...minValues);
    return result;
  }

  private static paintRecursiveRMemo(costs: number[][], memo: number[][], houseIndex: number, colorIndex: number): number {
    if(houseIndex < 0) {
      return 0;
    }
    if(memo[houseIndex][colorIndex] != -1) {
      return memo[houseIndex][colorIndex];
    }
    const colorCount = costs[0].length;
    let minCost: number | undefined;
    for(let i = 0; i < colorCount; i++) {
      if(i !== colorIndex) {
        let cost = this.paintRecursiveRMemo(costs, memo, houseIndex - 1, i) + costs[houseIndex][colorIndex];
        if(minCost === undefined || cost < minCost) {
          minCost = cost;
        }
      }
    }

    memo[houseIndex][colorIndex] = minCost!;
    return minCost!;
  }

  // Step 3: iterative  (perf/mem: 14/50)!!!
  public static paintIterative(costs: number[][]): number {
    if(!costs || costs.length === 0) {
      return 0;
    }
    const memo = Array.from(Array(costs.length).keys()).map(k => [-1, -1, -1]);
    memo[0] = [costs[0][0], costs[0][1], costs[0][2]];
    const colorCount = costs[0].length;

    for(let i = 1; i < costs.length; i++) {
      for(let j = 0; j < colorCount; j++) {
        memo[i][j] = this.calcNextCost(costs, memo, i, j, colorCount);
      }
    }

    const result = Math.min(...memo[memo.length - 1]);
    return result;
  }

  private static calcNextCost(costs: number[][], memo: number[][], houseIndex: number, colorIndex: number, colorCount: number): number {
    let minCost: number | undefined;
    for(let i = 0; i < colorCount; i++) {
      if(i !== colorIndex) {
        if(minCost === undefined || memo[houseIndex - 1][i] + costs[houseIndex][colorIndex] < minCost) {
          minCost = memo[houseIndex - 1][i] + costs[houseIndex][colorIndex];
        }
      }
    }

    return minCost!;
  }

  // Step 4: Itarative with variables (perf/mem: 77/50)!!!
  public static paintIterativeVars(costs: number[][]): number {
    if(!costs || costs.length === 0) {
      return 0;
    }
    const colorCount = costs[0].length;
    let prevCosts = [...costs[0]];
    const tempCosts = new Array(colorCount);

    for(let i = 1; i < costs.length; i++) {
      for(let j = 0; j < colorCount; j++) {
        tempCosts[j] = prevCosts
          .filter((v, idx) => idx != j)
          .reduce((prev, curr) => prev < curr ? prev : curr) + costs[i][j];
      }
      prevCosts = [...tempCosts];
    }

    const result = Math.min(...prevCosts);
    return result;
  }
}

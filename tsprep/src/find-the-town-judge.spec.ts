describe('Find the town judge', () => {
  test('Case 1', () => {
    expect(FindTheTownJudge.findJudge(2, [[1, 2]])).toEqual(2);
  });
  test('Case 2', () => {
    expect(FindTheTownJudge.findJudge(3, [[1, 3], [2, 3]])).toEqual(3);
  });
  test('Case 3', () => {
    expect(FindTheTownJudge.findJudge(3, [[1, 3], [2, 3], [3, 1]])).toEqual(-1);
  });
  test('Case 4', () => {
    expect(FindTheTownJudge.findJudge(3, [[1, 2], [2, 3]])).toEqual(-1);
  });
  test('Case 5', () => {
    expect(FindTheTownJudge.findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])).toEqual(3);
  });
  test('Case 6', () => {
    expect(FindTheTownJudge.findJudge(4, [])).toEqual(-1);
  });
  test('Case 7', () => {
    expect(FindTheTownJudge.findJudge(3, [[1, 2]])).toEqual(-1);
  });
  test('Case 8', () => {
    expect(FindTheTownJudge.findJudge(0, [[1, 2]])).toEqual(-1);
  });
  test('Case 9', () => {
    expect(FindTheTownJudge.findJudge(1, [])).toEqual(1);
  });
});

class FindTheTownJudge {
  public static findJudge(N: number, trust: number[][]): number {
    return this.findJudgeArray(N, trust);
  }

  public static findJudgeHash(N: number, trust: number[][]): number {
    const candidates: {[idx: number]: number | null} = {};
    for(let i = 0; i < trust.length; i++) {
      candidates[trust[i][0]] = null;
      if(candidates[trust[i][1]] !== null) {
        if(candidates[trust[i][1]] === undefined) {
          candidates[trust[i][1]] = 1;
        } else {
          candidates[trust[i][1]]!++;
        }
      }
    }

    for(const c in candidates) {
      if(candidates[c] === N - 1) {
        return parseInt(c, 10);
      }
    }

    return -1;
  }

  public static findJudgeArray(N: number, trust: number[][]): number {
    const candidates: Array<number | null> = Array.from(Array(N + 1).keys()).map(k => 0);
    for(let i = 0; i < trust.length; i++) {
      candidates[trust[i][0]] = null;
      if(candidates[trust[i][1]] !== null) {
        candidates[trust[i][1]]!++;
      }
    }

    const result = candidates.findIndex((c, idx) => idx > 0 && c === N - 1);
    return result;
  }
}

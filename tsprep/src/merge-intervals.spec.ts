/**
 * https://leetcode.com/problems/merge-intervals/
 * SOLVED BUT NOT OPTIMAL
 */
describe('Merge intervals', () => {
  test('Case 1', () => {
    const res = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
    expect(res).toContainEqual([1, 6]);
    expect(res).toContainEqual([8, 10]);
    expect(res).toContainEqual([15, 18]);
  });
  test('Case 2', () => {
    const res = merge([[1,4],[4,5]]);
    expect(res).toContainEqual([1, 5]);
  });
  test('Case 3', () => {
    const res = merge([[4, 5], [2, 4], [4, 6], [3, 4], [0, 0], [1, 1], [3, 5], [2, 2]]);
    expect(res).toContainEqual([0, 0]);
    expect(res).toContainEqual([1, 1]);
    expect(res).toContainEqual([2, 6]);
  });
});

function merge(intervals: number[][]): number[][] {

  const commonValues: Array<{n: number, open: boolean}> = [];
  for(let i = 0; i < intervals.length; ++i) {
    commonValues.push({n: intervals[i][0], open: true});
    commonValues.push({n: intervals[i][1], open: false});
  }
  commonValues.sort((a, b) => {
    return (a.n - b.n > 0) ? 1 :
      (a.n === b.n && !a.open && b.open) ? 1 :
      (a.n === b.n && a.open === b.open) ? 0 : -1;
  });

  const result: number[][] = [];
  let currentOpen: number | undefined = undefined;
  let openCount = 0;
  for(let i = 0; i < commonValues.length; ++i) {
    if(currentOpen === undefined && commonValues[i].open === true) {
      currentOpen = commonValues[i].n;
    }
    if(commonValues[i].open === true) {
      openCount++;
    } else {
      openCount--;
      if(openCount === 0 && (i === commonValues.length - 1 || commonValues[i + 1].n !== commonValues[i].n)) {
        result.push([currentOpen!, commonValues[i].n]);
        currentOpen = undefined;
      }
    }
  }

  return result;
}

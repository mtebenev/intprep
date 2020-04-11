/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3289/
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 * If there're duplicates in arr, count them seperately.
 */
describe('Counting elements', () => {
  test('Case 1', () => {
    expect(CountingElements.countElements([1])).toEqual(0);
  });
  test('Case 2', () => {
    expect(CountingElements.countElements([1, 2])).toEqual(1);
  });
  test('Case 3', () => {
    expect(CountingElements.countElements([1, 2, 3])).toEqual(2);
  });
  test('Case 3.2', () => {
    expect(CountingElements.countElements([1, 2, 3, 3])).toEqual(2);
  });
  test('Case 3.3', () => {
    expect(CountingElements.countElements([1, 2, 2, 3])).toEqual(3);
  });
  test('Case 3.4', () => {
    expect(CountingElements.countElements([1, 2, 2, 3, 3])).toEqual(3);
  });
  test('Case 4', () => {
    expect(CountingElements.countElements([1, 1, 3, 3, 5, 5, 7, 7])).toEqual(0);
  });
  test('Case 5', () => {
    expect(CountingElements.countElements([1, 3, 2, 3, 5, 0])).toEqual(3);
  });
  test('Case 6', () => {
    expect(CountingElements.countElements([1, 1, 2, 2])).toEqual(2);
  });
  test('Case 7', () => {
    expect(CountingElements.countElements([])).toEqual(0);
  });
  test('Case 8', () => {
    expect(CountingElements.countElements([-1, -2, -3])).toEqual(2);
  });
  test('Case 9', () => {
    expect(CountingElements.countElements([1, 1, 2])).toEqual(2);
  });
});

class CountingElements {
  public static countElements(arr: number[]): number {
    const counts: {[num: number]: number} = {};
    for(let i = 0; i < arr.length; i++) {
      if(counts[arr[i]] === undefined) {
        counts[arr[i]] = 0;
      }
      counts[arr[i]]++;
    }

    let result = 0;
    for(const nstr in counts) {
      const n = parseInt(nstr, 10);
      if(counts[n + 1] !== undefined) {
        result += counts[n];
      }
    }

    return result;
  }
}

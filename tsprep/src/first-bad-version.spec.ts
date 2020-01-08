/**
 * https://leetcode.com/problems/first-bad-version/
 * NOT SOLVED YET
 */
describe('First bad version', () => {
  test('Case 1', () => {
    const f = (v: number) => {
      return v >= 4 ? true : false;
    }

    expect(solution(f)(10)).toEqual(4);
  });
});

type BadVersionFunc = (version: number) => boolean;

function solution(isBadVersion: BadVersionFunc) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n: number): number {
    throw new Error();
  };
};

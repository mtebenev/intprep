/**
 * https://leetcode.com/problems/reverse-integer/
 * tags: easy, string
 */
describe('Reverse integer', () => {
  test('Case 1', () => {
    expect(reverse(123)).toEqual(321);
  });

  test('Case 2', () => {
    expect(reverse(-123)).toEqual(-321);
  });

  test('Case 3', () => {
    expect(reverse(120)).toEqual(21);
  });
});

function reverse(x: number): number {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
}

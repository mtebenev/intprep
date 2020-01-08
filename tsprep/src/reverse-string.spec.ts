/**
 * https://leetcode.com/problems/reverse-string/
 */
test('Case 1', () => {
  const arr = ["h", "e", "l", "l", "o"];
  reverseString(arr);
  expect(arr).toEqual(["o", "l", "l", "e", "h"]);
});
test('Case 2', () => {
  const arr = ["H", "a", "n", "n", "a", "h"];
  reverseString(arr);
  expect(arr).toEqual(["h", "a", "n", "n", "a", "H"]);
});

function reverseString(s: string[]): void {
  if(s.length < 2) {
    return;
  }
  const middleIdx = Math.floor(s.length / 2);
  for(let i = 0; i < middleIdx; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
};

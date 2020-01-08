/**
 * https://leetcode.com/problems/backspace-string-compare/
 */
test('Case 1', () => {
  expect(backspaceCompare('ab#c', 'ad#c')).toBeTruthy();
});
test('Case 2', () => {
  expect(backspaceCompare('ab##', 'c#d#')).toBeTruthy();
});
test('Case 3', () => {
  expect(backspaceCompare('a##c', '#a#c')).toBeTruthy();
});
test('Case 4', () => {
  expect(backspaceCompare('a#c', 'b')).toBeFalsy();
});
test('Case 5', () => {
  expect(backspaceCompare('bxj##tw', 'bxo#j##tw')).toBeTruthy();
});
test('Case 6', () => {
  expect(backspaceCompare('bbbextm', 'bbb#extm')).toBeFalsy();
});
test('Case 7', () => {
  expect(backspaceCompare('nzp#o#g', 'b#nzp#o#g')).toBeTruthy();
});

function backspaceCompare(S: string, T: string): boolean {
  if(S.length === 0 && T.length === 0) {
    return true;
  }
  if(S.length === 0 || T.length === 0) {
    return false;
  }

  let posS = S.length - 1;
  let posT = T.length - 1;

  while(posS >= 0 || posT >= 0) {

    let bc = 0;
    while(posS >= 0) {
      if(S[posS] === '#') {
        posS--;
        bc++;
      } else if(bc > 0) {
        posS--;
        bc--;
      } else {
        break;
      }
    }

    bc = 0;
    while(posT >= 0) {
      if(T[posT] === '#') {
        posT--;
        bc++;
      } else if(bc > 0) {
        posT--;
        bc--;
      } else {
        break;
      }
    }

    if((posS >= 0 && posT >= 0) && S[posS] !== T[posT]) {
      return false;
    }
    if((posS >= 0) != (posT >= 0)) {
      return false;
    }

    posS--;
    posT--;
  }
  return true;
};

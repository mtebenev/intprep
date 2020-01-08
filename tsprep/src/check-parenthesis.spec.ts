/**
 * From interview to holidaycheck
 */
describe('Check parentheses', () => {
  test('Case 1', () => {
    expect(checkParenthesis('()')).toBeTruthy();
    expect(checkParenthesis('()()')).toBeTruthy();
    expect(checkParenthesis('(()())')).toBeTruthy();
    expect(checkParenthesis(')(')).toBeFalsy();
    expect(checkParenthesis('())(')).toBeFalsy();
  });
});

function checkParenthesis(str: string): boolean {
  const stack: string[] = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      stack.push('(');
    } else if(str[i] === ')') {
      if(stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return true;
}

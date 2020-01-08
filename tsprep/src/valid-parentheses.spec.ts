/**
 * https://leetcode.com/problems/valid-parentheses/
 * tags: easy, string
 */
describe('Valid parentheses', () => {
  test('Case 1', () => {
    expect(ValidParentheses.isValid('()')).toBeTruthy();
  });
  test('Case 2', () => {
    expect(ValidParentheses.isValid('()[]{}')).toBeTruthy();
  });
  test('Case 3', () => {
    expect(ValidParentheses.isValid('(]')).toBeFalsy();
  });
  test('Case 4', () => {
    expect(ValidParentheses.isValid('([)]')).toBeFalsy();
  });
  test('Case 5', () => {
    expect(ValidParentheses.isValid('{[]}')).toBeTruthy();
  });
  test('Case 6', () => {
    expect(ValidParentheses.isValid(']')).toBeFalsy();
  });
});

class ValidParentheses {
  public static isValid(s: string): boolean {
    const stack = [];
    for(let i = 0; i < s.length; i++) {
      if('({['.indexOf(s[i]) !== -1) {
        stack.push(s[i]);
      } else if(')}]'.indexOf(s[i]) !== -1) {
        if(stack.length === 0) {
          return false;
        }
        const symbol = stack.pop();
        if( symbol === '(' && s[i] !== ')'
          || symbol === '[' && s[i] !== ']'
          || symbol === '{' && s[i] !== '}') {
          return false;
        }
      }
    }

    return stack.length === 0 ? true : false;
  }
}

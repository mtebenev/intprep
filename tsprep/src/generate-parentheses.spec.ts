/**
 * https://leetcode.com/problems/generate-parentheses/solution/
 * TODO: Check solution 3 (disjoint subsets)
 */
describe('Generate parentheses', () => {
  test('Case 1', () => {
    const res = GenerateParentheses.generateParenthesis(3);
    expect(res).toContain('((()))');
    expect(res).toContain('(()())');
    expect(res).toContain('(())()');
    expect(res).toContain('()(())');
    expect(res).toContain('()()()');
    expect(res.length).toEqual(5);
  });
  test('Case 2', () => {
    const res = GenerateParentheses.generateParenthesis(0);
    expect(res.length).toEqual(0);
  });
  test('Case 3', () => {
    const res = GenerateParentheses.generateParenthesis(1);
    expect(res).toContain('()');
    expect(res.length).toEqual(1);
  });
  test('Case 4', () => {
    const res = GenerateParentheses.generateParenthesis(2);
    expect(res).toContain('(())');
    expect(res).toContain('()()');
    expect(res.length).toEqual(2);
  });
});

export class GenerateParentheses {
  public static generateParenthesis(n: number): string[] {
    if(n === 0) {
      return [];
    }
    const result: string[] = [];
    this.backtrack(n, 0, 0, '', result);
    return result;
  }

  private static backtrack(
    n: number,
    openCount: number,
    closedCount: number,
    currentSequence: string,
    result: string[]): void {
    if(openCount === n && closedCount === n) {
      result.push(currentSequence);
    }

    if(openCount < n) {
      this.backtrack(n, openCount + 1, closedCount, currentSequence + '(', result);
    }
    if(closedCount < openCount) {
      this.backtrack(n, openCount, closedCount + 1, currentSequence + ')', result);
    }
  }
}

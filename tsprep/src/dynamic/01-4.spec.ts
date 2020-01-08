// Question 1.1: factorial
describe('Factorial', () => {
  /*
  test('Factorial iterative', () => {
    expect(Code14.factorialIterative(10)).toEqual(3628800);
  });
  test('Factorial recursive', () => {
    expect(Code14.factorialRecursive(10)).toEqual(3628800);
  });
  */
  test('Sum array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    Code14.arraySumBottom(arr);
    expect(arr).toEqual([1, 3, 6, 10, 15, 21]);
  });
});


class Code14 {
  public static factorialIterative(n: number): number {
    let result = 1;
    for(let i = 2; i <= n; i++) {
      result *= i;
    }

    return result;
  }

  public static factorialRecursive(n: number): number {
    if(n === 1) {
      return 1;
    }
    return this.factorialRecursive(n - 1) * n;
  }

  /**
   * Recursive function adds sum of all previous numbers to each index of the array.
   * Head version
   */
  public static arraySumBottom(nums: number[]): void {
    this.arraySumBottomR(nums, 1); // Note: possible boundary
  }
  private static arraySumBottomR(nums: number[], index: number): void {
    if(index >= nums.length) {
      return;
    }
    nums[index] += nums[index - 1];
    this.arraySumBottomR(nums, index + 1);
  }
}

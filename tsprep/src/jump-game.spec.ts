/**
 * https://leetcode.com/problems/jump-game/
 * tags: medium, array
 */
describe('Jump game', () => {
  test('Case 1', () => {
    expect(JumpGame.canJump([2, 3, 1, 1, 4])).toBeTruthy();
  });
  test('Case 2', () => {
    expect(JumpGame.canJump([3, 2, 1, 0, 4])).toBeFalsy();
  });
  test('Case 3', () => {
    expect(JumpGame.canJump([2, 0, 0])).toBeTruthy();
  });
  test('Case 4', () => {
    expect(JumpGame.canJump([2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6, 5,
      3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5, 8, 0, 7, 9, 3, 4, 6, 6, 5,
      8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7, 7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2,
      8, 2, 6, 8, 2, 2, 7, 5, 1, 7, 9, 6])).toBeFalsy();
  });
  test('Case 5', () => {
    expect(JumpGame.canJump([1, 2, 1, 0, 2, 1, 2, 1, 0])).toBeFalsy();
  });
  test('Case 6', () => {
    expect(JumpGame.canJump([1, 2, 3])).toBeTruthy();
  });
});

class JumpGame {
  public static canJump(nums: number[]): boolean {
    //return this.canJumpRecursiveMemo(nums);
    //return this.canJumpRecursiveR(nums, nums.length - 1);
    return this.canJumpIterative(nums);
  }

  // Recursive
  private static canJumpRecursiveR(nums: number[], endPos: number): boolean {
    if(endPos === 0) {
      return true;
    }

    let startPos = endPos - 1;
    while(startPos >= 0) {
      if(startPos + nums[startPos] >= endPos) {
        const canJumpFurther = this.canJumpRecursiveR(nums, startPos);
        if(canJumpFurther) {
          return true;
        }
      }
      startPos--;
    }
    return false;
  }

  // Recursive with memo.
  private static canJumpRecursiveMemo(nums: number[]): boolean {

    const rowFact = () => Array.from(Array(nums.length).keys()).map(() => undefined);
    const memo = Array.from(Array(nums.length).keys()).map(() => rowFact());
    return this.canJumpRecursiveMemoR(nums, memo, nums.length - 1);
  }
  private static canJumpRecursiveMemoR(
    nums: number[],
    memo: Array<Array<boolean | undefined>>,
    endPos: number): boolean {
    if(endPos === 0) {
      return true;
    }

    let startPos = endPos - 1;
    while(startPos >= 0) {
      let canJumpFurther = false;
      if(memo[startPos][endPos] !== undefined) {
        canJumpFurther = memo[startPos][endPos] as boolean;
      } else {
        if(startPos + nums[startPos] >= endPos) {
          canJumpFurther = this.canJumpRecursiveMemoR(nums, memo, startPos);
          memo[startPos][endPos] = canJumpFurther;
        }
      }
      if(canJumpFurther) {
        return true;
      }
      startPos--;
    }
    return false;
  }

  // Iterative memo
  private static canJumpIterative(nums: number[]): boolean {
    if(nums === null || nums.length < 1) {
      return false;
    }
    let max = nums[0];
    for(let i = 1; i < nums.length && i <= max; i++) {
      if(i + nums[i] > max) {
        max = nums[i] + i;
      }
    }

    const result = max >= nums.length - 1;
    return result;
  }
}

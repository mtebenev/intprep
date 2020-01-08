/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * TODO: DP with binary search
 */
describe('Longest increasing subsequence', () => {
  test('Case 1', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
  });
  test('Case 2', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 4])).toEqual(3);
  });
  test('Case 3', () => {
    expect(lengthOfLIS([10, 20, 100, 200])).toEqual(4);
  });
});

function lengthOfLIS(nums: number[]): number {
  return lengthOfLIS_dp(nums);
}

function lengthOfLIS_dp(nums: number[]): number {
  if(nums.length == 0) {
    return 0;
  }
  const dp = new Array(nums.length);
  dp[0] = 1;
  let maxans = 1;
  for(let i = 1; i < dp.length; i++) {
    let maxval = 0;
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        //maxval = Math.max(maxval, dp[j]);
        if(dp[j] > maxval) {
          maxval = dp[j];
        }
      }
    }
    dp[i] = maxval + 1;
    maxans = Math.max(maxans, dp[i]);
  }
  return maxans;
}

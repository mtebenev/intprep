# https://leetcode.com/problems/3sum/
# Tags: medium, array

from typing import List
import unittest

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        for i in range(len(nums) - 1):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            lo = i + 1
            hi = len(nums) - 1
            while lo < hi:
                target = -nums[i]
                if nums[lo] + nums[hi] == target:
                    result.append([nums[i], nums[lo], nums[hi]])
                    while lo < hi and nums[lo] == nums[lo + 1]:
                        lo += 1
                    while lo < hi and nums[hi] == nums[hi - 1]:
                        hi -= 1

                    lo += 1
                    hi -= 1
                elif nums[lo] + nums[hi] < target:
                    lo += 1
                else:
                    hi -= 1

        return result


def test_1():
    case = unittest.TestCase()
    result = Solution().threeSum([-1, 0, 1, 2, -1, -4])
    case.assertCountEqual(result,
        [[-1, 0, 1], [-1, -1, 2]])

def test_2():
    case = unittest.TestCase()
    result = Solution().threeSum([-1, 0, 0, 0, 0, 1, 2, -1, -4])
    case.assertCountEqual(result,
        [[-1, 0, 1], [-1, -1, 2], [0, 0, 0]])


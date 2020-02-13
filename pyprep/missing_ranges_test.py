# https://leetcode.com/problems/missing-ranges/
# Tags: medium, array

import unittest
from typing import List

class Solution:
    def findMissingRanges(self, nums: List[int], lower: int, upper: int) -> List[str]:
        result = []
        if not nums or len(nums) == 0:
            self.add_range(result, lower, upper)
            return result

        for idx in range(len(nums) + 1):
            range_lo = lower if idx == 0 else nums[idx - 1] + 1
            range_hi = upper if idx == len(nums) else nums[idx] - 1
            self.add_range(result, range_lo, range_hi)
        return result

    def add_range(self, result: List[str], lo: int, hi: int):
        if lo == hi:
            result.append(str(lo))
        elif lo < hi:
            result.append(f'{lo}->{hi}')


def test_1():
    nums = [5]
    result = Solution().findMissingRanges(nums, 1, 10)
    assert result == ['1->4', '6->10']

def test_2():
    nums = [0, 1, 3, 50, 75]
    result = Solution().findMissingRanges(nums, 0, 99)
    assert result == ['2', '4->49', '51->74', '76->99']

def test_3():
    nums = [1, 1]
    result = Solution().findMissingRanges(nums, 1, 10)
    assert result == ['2->10']

def test_4():
    nums = []
    result = Solution().findMissingRanges(nums, 1, 1)
    assert result == ['1']

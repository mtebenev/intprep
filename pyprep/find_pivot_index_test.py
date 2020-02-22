# https://leetcode.com/problems/find-pivot-index/
# Tags: easy, array

from typing import List

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        all_sum = sum(nums)
        left_sum = 0
        for pos, x in enumerate(nums):
            if left_sum == (all_sum - left_sum - x):
                return pos
            left_sum += x
        return -1


def test_1():
    assert Solution().pivotIndex([1, 2, 1]) == 1

def test_2():
    assert Solution().pivotIndex([1, 7, 3, 6, 5, 6]) == 3

def test_3():
    assert Solution().pivotIndex([1, 2, 3]) == -1

def test_4():
    assert Solution().pivotIndex([1, 2, 3]) == -1

def test_5():
    assert Solution().pivotIndex([-1, -1, -1, -1, -1, 0]) == -2

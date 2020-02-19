# https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/802/
# Tags: medium, search

from typing import List
import unittest


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if nums == None or len(nums) == 0:
            return [-1, -1]

        # Search for left bound
        left = -1
        if nums[0] == target:
            left = 0
        else:
            left = -1
            l = 1
            r = len(nums) - 1
            while l <= r:
                m = (l + r) // 2
                if nums[m - 1] < target and nums[m] == target:
                    left = m
                    break
                elif nums[m] >= target:
                    r = m - 1
                else:
                    l = m + 1

        # Right bound
        if left == -1:
            return [-1, -1]
        if nums[len(nums) - 1] == target:
            return [left, len(nums) - 1]

        l = left
        r = len(nums) - 2
        right = left
        while l <= r:
            m = (l + r) // 2
            if nums[m + 1] > target and nums[m] == target:
                right = m
                break
            elif nums[m] == target:
                l = m + 1
            else:
                r = m - 1

        return [left, right]

def test_1():
    assert Solution().searchRange([5, 7, 7, 8, 8, 10], 8) == [3, 4]


def test_2():
    assert Solution().searchRange([5, 7, 7, 8, 8, 10], 6) == [-1, -1]

def test_3():
    assert Solution().searchRange([1], 1) == [0, 0]

def test_4():
    assert Solution().searchRange([1, 3], 1) == [0, 0]

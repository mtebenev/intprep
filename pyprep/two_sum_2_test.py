# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
# Tags: easy, array

from utils.binary_tree_node import TreeNode
import math
from typing import List, Deque, Tuple
from collections import deque


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        lo = 0
        hi = len(numbers) - 1
        while lo < hi:
            s = numbers[lo] + numbers[hi]
            if s == target:
                return [lo + 1, hi + 1]
            if s < target:
                lo += 1
            else:
                hi -= 1
        return []


def test_1():
    result = Solution().twoSum([2, 7, 11, 15], 9)
    assert result == [1, 2]

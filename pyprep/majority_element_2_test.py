# https://leetcode.com/problems/majority-element/
# Tags: easy, array
# TODO: not solved yet

from typing import Tuple, List

class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        return []

def test_1():
    assert Solution().majorityElement([3, 2, 3]) == [3]

def test_2():
    assert Solution().majorityElement([1, 1, 1, 3, 3, 2, 2, 2]) == [1, 2]

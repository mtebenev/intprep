# https://leetcode.com/problems/majority-element/
# Tags: easy, array

from typing import Tuple, List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        return self.majorityElement_bm(nums)

    # Boyer-Moore voting
    def majorityElement_bm(self, nums: List[int]) -> int:
        counter = 0
        candidate = None
        for n in nums:
            if counter == 0:
                candidate = n
            counter += 1 if n == candidate else -1

        return candidate


def test_1():
    assert Solution().majorityElement([3,2,3]) == 3


def test_2():
    assert Solution().majorityElement([2,2,1,1,1,2,2]) == 2

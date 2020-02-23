# https://leetcode.com/problems/duplicate-zeros/solution/
# Tags: easy, array

from typing import List, Deque
from collections import deque

class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        if not arr or len(arr) == 0:
            return
        queue = deque()
        for pos, x in enumerate(arr):
            queue.append(x)
            if x == 0:
                queue.append(x)
            arr[pos] = queue.popleft()

def test_1():
    arr = [0]
    Solution().duplicateZeros(arr)
    assert arr == [0]

def test_2():
    arr = [1]
    Solution().duplicateZeros(arr)
    assert arr == [1]

def test_3():
    arr = [1, 1, 1]
    Solution().duplicateZeros(arr)
    assert arr == [1, 1, 1]

def test_4():
    arr = [0, 1, 1]
    Solution().duplicateZeros(arr)
    assert arr == [0, 0, 1]

def test_5():
    arr = [1, 0, 2, 3, 0, 4, 5, 0]
    Solution().duplicateZeros(arr)
    assert arr == [1, 0, 0, 2, 3, 0, 0, 4]


# https://leetcode.com/problems/interval-list-intersections/
# Tags: medium, two pointers, intervals

from typing import List


class Solution:
    def intervalIntersection(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        i = 0
        j = 0
        result = []
        while i < len(A) and j < len(B):
            start = max(A[i][0], B[j][0])
            end = min(A[i][1], B[j][1])
            if start <= end:
                result.append([start, end])

            if A[i][1] <= B[j][1]:
                i += 1
            else:
                j += 1

        return result


def test_1():
    int_a = []
    int_b = []
    assert Solution().intervalIntersection(int_a, int_b) == []


def test_2():
    int_a = [[1, 2]]
    int_b = []
    assert Solution().intervalIntersection(int_a, int_b) == []


def test_3():
    int_a = [[1, 2]]
    int_b = [[1, 2]]
    assert Solution().intervalIntersection(int_a, int_b) == [[1, 2]]


def test_4():
    int_a = [[1, 5]]
    int_b = [[1, 2], [3, 4]]
    assert Solution().intervalIntersection(int_a, int_b) == [[1, 2], [3, 4]]


def test_5():
    int_a = [[1, 5]]
    int_b = [[8, 9]]
    assert Solution().intervalIntersection(int_a, int_b) == []


def test_6():
    int_a = [[0, 2], [5, 10], [13, 23], [24, 25]]
    int_b = [[1, 5], [8, 12], [15, 24], [25, 26]]
    assert Solution().intervalIntersection(int_a, int_b) == [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]

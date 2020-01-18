# https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/
# Tags: medium, array

from typing import Tuple, List

class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
        aup = bdown = 0
        adown = bup = 1
        for index in range(1, len(A)):

            if aup == -1 and adown == -1 and bup == -1 and bdown == -1:
                break

            if aup != -1:
                if B[index] == A[0] and A[index] != A[0]:
                    aup += 1
                elif A[index] != A[0]:
                    aup = -1

            if adown != -1:
                if A[index] == A[0] and B[index] != A[0]:
                    adown += 1
                elif B[index] != A[0]:
                    adown = -1

            if bup != -1:
                if B[index] == B[0] and A[index] != B[0]:
                    bup += 1
                elif A[index] != B[0]:
                    bup = -1

            if bdown != -1:
                if A[index] == B[0] and B[index] != B[0]:
                    bdown += 1
                elif B[index] != B[0]:
                    bdown = -1

        res = [x for x in [aup, adown, bup, bdown] if x != -1]
        result = -1 if len(res) == 0 else min(res)
        return result


def test_1():
    A = [2,1,2,4,2,2]
    B = [5,2,6,2,3,2]
    result = Solution().minDominoRotations(A, B)
    assert  result == 2

def test_2():
    A = [3,5,1,2,3]
    B = [3,6,3,3,4]
    result = Solution().minDominoRotations(A, B)
    assert  result == -1

def test_3():
    A = [1,2,1,3,1,1,3,4]
    B = [3,2,2,1,4,1,4,2]
    result = Solution().minDominoRotations(A, B)
    assert  result == -1

def test_4():
    A = [1,2]
    B = [3,2]
    result = Solution().minDominoRotations(A, B)
    assert  result == -1

def test_5():
    A = [1,2,1,1,1,2,2,2]
    B = [2,1,2,2,2,2,2,2]
    result = Solution().minDominoRotations(A, B)
    assert  result == 1

def test_6():
    A = [1,2]
    B = [2,1]
    result = Solution().minDominoRotations(A, B)
    assert  result == 1


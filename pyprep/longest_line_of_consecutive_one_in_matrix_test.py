# https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/
# Tags: medium, array

from typing import List


class Solution:
    def longestLine(self, M: List[List[int]]) -> int:
        if len(M) == 0:
            return 0

        width = len(M[0])
        height = len(M)
        dp_arr = [[[0 for k in range(4)] for j in range(width)]
                  for i in range(height)]
        max_len = 0
        for i in range(len(M)):
            for j in range(len(M[0])):
                if M[i][j] == 1:
                    # Horizontal
                    dp_arr[i][j][0] = dp_arr[i][j - 1][0] + 1 if j > 0 else 1
                    # Vertical
                    dp_arr[i][j][1] = dp_arr[i - 1][j][1] + 1 if i > 0 else 1
                    # Diagonal
                    dp_arr[i][j][2] = dp_arr[i - 1][j - 1][2] + 1 if i > 0 and j > 0 else 1
                    # Anti-diagonal
                    dp_arr[i][j][3] = dp_arr[i - 1][j + 1][3] + 1 if i > 0 and j < width - 1 else 1
                    max_len = max(max_len, dp_arr[i][j][0], dp_arr[i][j][1], dp_arr[i][j][2], dp_arr[i][j][3])

        return max_len

def test_1():
    matrix = [[0, 1, 1, 0],
              [0, 1, 1, 0],
              [0, 0, 0, 1]]
    assert Solution().longestLine(matrix) == 3


def test_2():
    matrix = [[0]]
    assert Solution().longestLine(matrix) == 0


def test_3():
    matrix = [[1]]
    assert Solution().longestLine(matrix) == 1


def test_4():
    matrix = []
    assert Solution().longestLine(matrix) == 0


def test_5():
    matrix = [
        [0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 1, 0],
        [1, 0, 1, 1, 1],
        [1, 0, 0, 0, 1]]
    assert Solution().longestLine(matrix) == 3

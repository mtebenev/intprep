# https://leetcode.com/problems/rectangle-area/
# Tags: medium, math

class Solution:
    def computeArea(self, A: int, B: int, C: int, D: int, E: int, F: int, G: int, H: int) -> int:
        area1 = (D - B) * (C - A)
        area2 = (H - F) * (G - E)

        if A >= G or E >= C or B >= H or F >= D:
            return area1 + area2

        int_width = min(C, G) - max(A, E)
        int_height = min(D, H) - max(B, F)
        return area1 + area2 - (int_width * int_height)


def test_1():
    assert Solution().computeArea(-3,  0,  3,  4,  0,  -1,  9,  2) == 45

def test_2():
    assert Solution().computeArea(0,  0,  1,  1,  10,  10,  11,  11) == 2

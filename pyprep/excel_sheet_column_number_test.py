# https://leetcode.com/problems/excel-sheet-column-number/
# Tags: easy, math

class Solution:
    def titleToNumber(self, s: str) -> int:
        result = 0
        base = 1
        for i in range(0, len(s)):
            num = ord(s[len(s) - i - 1]) - ord('A') + 1
            result += num * base
            base *= 26

        return result


def test_1():
    assert Solution().titleToNumber('A') == 1

def test_2():
    assert Solution().titleToNumber('AB') == 28

def test_3():
    assert Solution().titleToNumber('ZY') == 701

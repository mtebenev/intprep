# https://leetcode.com/problems/add-strings/
# Tags: easy, string

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        pos1 = len(num1) - 1
        pos2 = len(num2) - 1
        carry = False
        sym0 = ord('0')
        sum = 0
        result = ''
        while pos1 >= 0 or pos2 >= 0:
            n1 = ord(num1[pos1]) - sym0 if pos1 >= 0 else 0
            n2 = ord(num2[pos2]) - sym0 if pos2 >= 0 else 0
            sum = n1 + n2 + (1 if carry else 0)
            if sum > 9:
                carry = True
                result = str(sum - 10) + result
            else:
                carry = False
                result = str(sum) + result
            pos1 -= 1
            pos2 -= 1
        return result if not carry else '1' + result


def test_1():
    assert Solution().addStrings('1', '1') == '2'


def test_2():
    assert Solution().addStrings('77', '88') == '165'


def test_3():
    assert Solution().addStrings('9', '99') == '108'

def test_4():
    assert Solution().addStrings('', '') == ''

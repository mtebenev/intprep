# https://leetcode.com/problems/string-to-integer-atoi/
# Tags: medium, string
class Solution:
    def myAtoi(self, str: str) -> int:
        posDigitStart = 0
        while posDigitStart < len(str) and (not str[posDigitStart].isdigit() and str[posDigitStart] != '-' and str[posDigitStart] != '+'):
            if not str[posDigitStart].isdigit() and str[posDigitStart] != ' ' and str[posDigitStart] != '-' and str[posDigitStart] != '+':
                return 0
            posDigitStart += 1

        if posDigitStart == len(str):
            return 0
        is_minus = True if str[posDigitStart] == '-' else False
        if is_minus or str[posDigitStart] == '+':
            posDigitStart += 1

        posDigitEnd = posDigitStart

        while posDigitEnd < len(str) and str[posDigitEnd].isdigit():
            posDigitEnd += 1

        if posDigitEnd == posDigitStart:
            return 0

        result = int(str[posDigitStart:posDigitEnd])
        if is_minus:
            result = -result

        result = max(result, -(2**31))
        result = min(result, 2**31-1)

        return result


def test_1():
    assert Solution().myAtoi('42') == 42


def test_2():
    assert Solution().myAtoi('   -42') == -42

def test_3():
    assert Solution().myAtoi('4193 with words') == 4193


def test_4():
    assert Solution().myAtoi('words and 987') == 0

def test_5():
    assert Solution().myAtoi('-91283472332') == -2147483648

def test_6():
    assert Solution().myAtoi('b1') == 0

def test_7():
    assert Solution().myAtoi('-') == 0

def test_8():
    assert Solution().myAtoi('-0') == 0

def test_9():
    assert Solution().myAtoi('  a -42') == 0

def test_10():
    assert Solution().myAtoi('.1') == 0

def test_11():
    assert Solution().myAtoi('+1') == 1

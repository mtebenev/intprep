# https://leetcode.com/problems/guess-number-higher-or-lower/
# tags: easy, binary search
# todo: ternary search
# todo: perf/mem: 38/11 - check for other solutions

class Guesser:
    def __init__(self, num: int):
        self._num = num

    def guessNumber(self, n: int) -> int:
        return -1 if self._num < n else 1 if self._num > n else 0

class Solution:
    def guessNumber(self, guesser: Guesser, n: int) -> int:
        range_min = 1
        range_max = n
        num = (range_min + range_max) // 2
        comp_result = guesser.guessNumber(num)
        while comp_result != 0:
            if comp_result == -1:
                range_max = num - 1
            elif comp_result == 1:
                range_min = num + 1

            if comp_result != 0:
                num = (range_min + range_max) // 2
                comp_result = guesser.guessNumber(num)

        return num

def test_1():
    guesser = Guesser(100)
    assert Solution().guessNumber(guesser, 200) == 100

def test_2():
    guesser = Guesser(6)
    assert Solution().guessNumber(guesser, 10) == 6

def test_3():
    guesser = Guesser(2)
    assert Solution().guessNumber(guesser, 2) == 2

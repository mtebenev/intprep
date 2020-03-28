# https://leetcode.com/problems/guess-number-higher-or-lower-ii/
# tags: medium, dynamic programming
# TODO: not solved yet

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

class Solution2:
    def getMoneyAmount(self, n: int) -> int:
        result = self.getMoneyAmountR(1, n)
        return result

    def getMoneyAmountR(self, lo: int, hi: int) -> int:
        if lo == hi:
            return 0
        if hi - lo == 1:
            return lo
        mid = (lo + hi) // 2 + 1
        result_l = self.getMoneyAmountR(lo, mid - 1)
        result_r = self.getMoneyAmountR(mid + 1, hi)

        result = mid + result_l + result_r
        return result

def test_1():
    guesser = Guesser(100)
    assert Solution().guessNumber(guesser, 200) == 100

def test_2():
    guesser = Guesser(6)
    assert Solution().guessNumber(guesser, 10) == 6

def test_3():
    guesser = Guesser(2)
    assert Solution().guessNumber(guesser, 2) == 2

def test_4():
    result = Solution2().getMoneyAmount(4)
    assert result == 4

def test_5():
    result = Solution2().getMoneyAmount(3)
    assert result == 4


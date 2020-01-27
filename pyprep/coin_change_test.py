# https://leetcode.com/problems/coin-change/
# Tags: medium, dynamic programming

import math
from typing import List

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        result = self.coinChange_iterative_memo(coins, amount)
        #result = self.coinChange_recursive(coins, amount)
        return result

    def coinChange_recursive(self, coins: List[int], amount: int) -> int:
        result = self.coinChange_recursiveR(coins, amount, 0)
        return result

    def coinChange_recursiveR(self, coins: List[int], target: int, current_sum: int) -> int:
        if current_sum > target:
            return -1
        if current_sum == target:
            return 0

        current_min = math.inf
        for c in coins:
            r = self.coinChange_recursiveR(coins, target, current_sum + c)
            if r != -1:
                current_min = min(current_min, r)

        return -1 if current_min == math.inf else current_min + 1

    # LC result (perf/mem): 5/25
    def coinChange_recursive_memo(self, coins: List[int], amount: int) -> int:
        memo = [None] * amount
        result = self.coinChange_recursive_memoR(coins, memo, amount, 0)
        return result

    def coinChange_recursive_memoR(self, coins: List[int], memo: List[int], target: int, current_sum: int) -> int:
        if current_sum > target:
            return -1
        if current_sum == target:
            return 0

        if memo[current_sum] != None:
            return memo[current_sum]

        current_min = math.inf
        for c in coins:
            r = self.coinChange_recursive_memoR(coins, memo, target, current_sum + c)
            if r != -1:
                current_min = min(current_min, r)

        result = -1 if current_min == math.inf else current_min + 1
        memo[current_sum] = result
        return result

    # LC result (perf/mem): 33/100
    def coinChange_iterative_memo(self, coins: List[int], amount: int) -> int:
        if amount == 0:
            return 0

        memo = [-1] * (amount + 1)
        for c in coins:
            if c <= amount:
                memo[c] = 1

        for a in range(1, amount + 1):
            current_min = math.inf
            for c in coins:
                if a - c >= 0 and memo[a - c] != -1:
                    current_min = min(current_min, memo[a - c])
            if current_min != math.inf and memo[a] == -1:
                memo[a] = current_min + 1
        return memo[amount]


def test_1():
    assert Solution().coinChange([1,2,5], 11) == 3

def test_2():
    assert Solution().coinChange([1,2], 3) == 2

def test_3():
    assert Solution().coinChange([1], 1) == 1

def test_4():
    assert Solution().coinChange([1, 2], 1) == 1

def test_5():
    assert Solution().coinChange([1], 2) == 2

def test_6():
    assert Solution().coinChange([2], 3) == -1

def test_7():
    assert Solution().coinChange([1], 0) == 0

def test_8():
    assert Solution().coinChange([1, 2], 2) == 1

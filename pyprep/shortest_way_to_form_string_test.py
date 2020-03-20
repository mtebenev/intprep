# https://leetcode.com/problems/shortest-way-to-form-string/
# Tags: medium, greedy, array, dynamic programming
# TODO: this is M*N solution. Optimize.


from typing import DefaultDict, List
from collections import defaultdict
import math
from bisect import bisect_right, bisect_left

class Solution:
    def shortestWay(self, source: str, target: str) -> int:
        result = self.shortestWay_log(source, target)
        return result

    def shortestWay_my(self, source: str, target: str) -> int:
        # Form dictionary
        start_positions: DefaultDict[str, List[int]] = defaultdict(list)
        for pos, c in enumerate(source):
            if not start_positions[c]:
                start_positions[c] = [pos]
            else:
                start_positions[c].append(pos)

        # Check
        pos = 0
        steps = 0
        while pos < len(target):
            max_step = -math.inf
            if not start_positions[target[pos]]:
                return -1
            for s in start_positions[target[pos]]:
                step = self.advance(source, target, pos, s)
                max_step = max(max_step, step)
            pos += max_step
            steps += 1

        return steps

    def advance(self, source: str, target: str, target_pos: int, source_pos) -> int:
        sp = source_pos
        tp = target_pos
        result = 0
        while sp < len(source) and tp < len(target):
            if source[sp] == target[tp]:
                result += 1
                tp += 1
            sp += 1
        return result

    # O(M*N), 10 times faster than the original.
    def shortestWay_mn(self, source: str, target: str) -> int:
        if len(target) == 0:
            return 0
        symbols_map = [False] * 26
        for c in source:
            symbols_map[ord(c)-ord('a')] = True

        j = 0
        i = 0
        res = 1
        while i < len(target):
            if not symbols_map[ord(target[i]) - ord('a')]:
                return -1
            while j < len(source) and source[j] != target[i]:
                j += 1
            if j == len(source):
                j = 0
                res += 1
            else:
                i += 1
                j += 1
        return res

    # O(M*N), mem O(1)
    def shortestWay_mem0(self, source: str, target: str) -> int:
        if len(target) == 0:
            return 0

        i = 0 # target
        res = 0
        while i < len(target):
            i_iteration = i
            j = 0 # source
            while j < len(source):
                if i < len(target) and source[j] == target[i]:
                    i += 1
                j += 1

            if i == i_iteration:
                return -1
            res += 1
        return res

    # O(LogN) use the binary search
    def shortestWay_log(self, source: str, target: str) -> int:
        if len(target) == 0:
            return 0

        symbols_map = [ [] for i in range(26) ]
        for pos, c in enumerate(source):
            symbols_map[ord(c)-ord('a')].append(pos)

        res = 1
        t_idx = 0
        s_idx = 0
        while t_idx < len(target):
            next_symbol_list = symbols_map[ord(target[t_idx])-ord('a')]
            if len(next_symbol_list) == 0:
                return -1
            next_s_idx = bisect_left(next_symbol_list, s_idx)
            if next_s_idx != len(next_symbol_list):
                s_idx = next_symbol_list[next_s_idx] + 1
                t_idx += 1
            else:
                s_idx = 0
                res += 1

        return res

def test_1():
    assert Solution().shortestWay('abcdeab', 'abc') == 1

def test_2():
    assert Solution().shortestWay('abc', 'abcbc') == 2

def test_3():
    assert Solution().shortestWay('xyz', 'xzyxz') == 3

def test_4():
    assert Solution().shortestWay('xyz', '') == 0

def test_5():
    assert Solution().shortestWay('abc', 'xyz') == -1

def test_6():
    assert Solution().shortestWay('aaaaa', 'aaaaaaaaaaaaa') == 3


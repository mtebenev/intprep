# https://leetcode.com/problems/shortest-way-to-form-string/
# Tags: medium, greedy, array, dynamic programming


from typing import DefaultDict, List
from collections import defaultdict
import math

class Solution:
    def shortestWay(self, source: str, target: str) -> int:
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


def test_1():
    assert Solution().shortestWay('abcdeab', 'abc') == 1

def test_2():
    assert Solution().shortestWay('abc', 'abcbc') == 2

def test_3():
    assert Solution().shortestWay('xyz', 'xzyxz') == 3

def test_4():
    assert Solution().shortestWay('xyz', '') == 0

def test_5():
    assert Solution().shortestWay('', 'xyz') == -1

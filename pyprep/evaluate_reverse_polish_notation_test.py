from typing import List, Callable
from typing import List, Deque
import collections

# https://leetcode.com/problems/evaluate-reverse-polish-notation/
# Tags: medium, stack

class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        if tokens == None or len(tokens) == 0:
            return 0

        stack = collections.deque()
        for t in tokens:
            if t == '+':
                self._doOp(stack, lambda a, b: a + b)
            elif t == '-':
                self._doOp(stack, lambda a, b: a - b)
            elif t == '*':
                self._doOp(stack, lambda a, b: a * b)
            elif t == '/':
                self._doOp(stack, lambda a, b: int(float(a) / b))
            else:
                stack.append(t)

        result = stack.pop()
        return int(result)

    def _doOp(self, d: Deque[str], f: Callable[[int, int], int]):
        b = int(d.pop())
        a = int(d.pop())
        r = f(a,b)
        d.append(str(r))

def test_1():
    assert Solution().evalRPN(['2', '1', '+', '3', '*']) == 9

def test_2():
    assert Solution().evalRPN(['4', '13', '5', '/', '+']) == 6

def test_3():
    assert Solution().evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']) == 22

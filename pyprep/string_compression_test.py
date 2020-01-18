# https://leetcode.com/problems/string-compression/
# Tags: easy, string

from typing import List, Deque


class Solution:
    def compress(self, chars: List[str]) -> int:
        if chars == None or len(chars) == 0:
            return 0
        if len(chars) == 1:
            return 1

        pos_write = 0
        sequence_len = 1
        current_symbol = chars[0]
        for idx in range(1, len(chars) + 1):
            if idx < len(chars) and chars[idx] == current_symbol:
                sequence_len += 1
            if (idx < len(chars) and chars[idx] != current_symbol) or idx == len(chars):
                chars[pos_write] = current_symbol
                pos_write += 1
                if sequence_len > 1:
                    str_num = str(sequence_len)
                    for cstr in str_num:
                        chars[pos_write] = cstr
                        pos_write += 1

                if idx < len(chars):
                    current_symbol = chars[idx]
                    sequence_len = 1

        return pos_write


def test_1():
    symbols = ["a", "a", "b", "b", "c", "c", "c"]
    result = Solution().compress(symbols)
    assert result == 6
    assert symbols[:result] == ["a", "2", "b", "2", "c", "3"]

def test_2():
    symbols = ["a"]
    result = Solution().compress(symbols)
    assert result == 1
    assert symbols[:result] == ["a"]

def test_3():
    symbols = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
    result = Solution().compress(symbols)
    assert result == 4
    assert symbols[:result] == ["a","b","1","2"]

def test_4():
    symbols = []
    result = Solution().compress(symbols)
    assert result == 0
    assert symbols == []

def test_5():
    result = Solution().compress(None)
    assert result == 0

def test_6():
    symbols = ["a","b","c"]
    result = Solution().compress(symbols)
    assert result == 3
    assert symbols[:result] == ["a","b","c"]


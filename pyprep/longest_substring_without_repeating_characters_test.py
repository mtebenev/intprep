# https://leetcode.com/problems/longest-substring-without-repeating-characters/
# Tags: medium, string

from typing import List
import unittest


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        return self.lengthOfLongestSubstring_sw(s)

    # The initial implementation
    def lengthOfLongestSubstring_my(self, s: str) -> int:
        symbols = {}
        max_len = 0
        cur_len = 0
        for pos, c in enumerate(s):
            if not c in symbols:
                symbols[c] = pos
                cur_len += 1
            else:
                if cur_len > max_len:
                    max_len = cur_len
                next_start = symbols[c] + 1
                to_remove = []
                for dict_key in symbols:
                    if symbols[dict_key] < next_start:
                        to_remove.append(dict_key)
                for r in to_remove:
                    symbols.pop(r)
                symbols[c] = pos
                cur_len = pos - next_start + 1

        return max(max_len, cur_len)

    # Sliding window (LC)
    def lengthOfLongestSubstring_sw(self, s: str) -> int:
        n = len(s)
        symbols = set()
        ans = i = j = 0
        while i < n and j < n:
            if not (s[j] in symbols):
                symbols.add(s[j])
                j += 1
                ans = max(ans, j - i)
            else:
                symbols.remove(s[i])
                i += 1
        return ans

def test_1():
    assert Solution().lengthOfLongestSubstring('abcabcbb') == 3

def test_2():
    assert Solution().lengthOfLongestSubstring('bbbbb') == 1

def test_3():
    assert Solution().lengthOfLongestSubstring('pwwkew') == 3

def test_4():
    assert Solution().lengthOfLongestSubstring('') == 0

def test_5():
    assert Solution().lengthOfLongestSubstring('a') == 1

def test_6():
    assert Solution().lengthOfLongestSubstring('abc') == 3

def test_7():
    assert Solution().lengthOfLongestSubstring('abcaa') == 3

def test_8():
    assert Solution().lengthOfLongestSubstring('abcabcd') == 4

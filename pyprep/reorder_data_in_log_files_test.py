# https://leetcode.com/problems/reorder-data-in-log-files/
# Tags: easy, string

from typing import List
import unittest

class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        result: List[str] = []
        alpha_count = 0
        for l in logs:
            id, rest = l.split(' ', 1)
            is_alpha = rest[0].isalpha()

            if not is_alpha:
                result.append(l)
            else:
                insert_pos = 0
                while insert_pos < alpha_count and rest > result[insert_pos].split(' ', 1)[1]:
                    insert_pos += 1
                result.insert(insert_pos, l)
                alpha_count += 1
        return result

    # The gem from LC
    def reorderLogFiles_LC(self, logs):
        def f(log):
            id_, rest = log.split(" ", 1)
            return (0, rest, id_) if rest[0].isalpha() else (1,)

        return sorted(logs, key = f)

def test_1():
    logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
    assert Solution().reorderLogFiles(logs) ==  ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

def test_2():
    logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"]
    assert Solution().reorderLogFiles(logs) ==  ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

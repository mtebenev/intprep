# https://leetcode.com/problems/number-of-matching-subsequences/
# Tags: medium, array
# TODO: Not solved yet

from typing import List

class Solution:
    def numMatchingSubseq(self, S: str, words: List[str]) -> int:
        result = self.numMatchingSubseq_original(S, words)
        return result

    # Time limit exceeded
    def numMatchingSubseq_original(self, S: str, words: List[str]) -> int:
        word_pointers = [0] * len(words)
        result = 0
        for c in S:
            for j in range(len(word_pointers)):
                if word_pointers[j] != -1:
                    if c == words[j][word_pointers[j]]:
                        word_pointers[j] += 1
                        if word_pointers[j] == len(words[j]):
                            result +=1
                            word_pointers[j] = -1
        return result

def test_1():
    words = ['abc']
    assert Solution().numMatchingSubseq('abc', words) == 1

def test_2():
    words = ['abc', 'abc']
    assert Solution().numMatchingSubseq('abc', words) == 2

def test_3():
    words = ['abc', 'abc', 'def']
    assert Solution().numMatchingSubseq('abc', words) == 2

def test_4():
    words = ['abc']
    assert Solution().numMatchingSubseq('def', words) == 0

def test_5():
    words = ['a', 'bb', 'acd', 'ace']
    assert Solution().numMatchingSubseq('abcde', words) == 3

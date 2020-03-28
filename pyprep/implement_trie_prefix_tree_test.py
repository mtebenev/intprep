# https://leetcode.com/problems/implement-trie-prefix-tree/
# Tags: medium, design, trie
# TODO: implement with simple iteration.

from typing import List
from utils.binary_tree_node import TreeNode
import unittest

# Note: ok, this is clear fail. Need to implement without recursion.
class TrieRecursive:
    def __init__(self):
        self.root_node: 'TrieNode' = TrieNode(True)

    def insert(self, word: str) -> None:
        self.root_node.insert(word)

    def search(self, word: str) -> bool:
        if len(word) == 0:
            return False
        return self.root_node.search(word, True)

    def startsWith(self, prefix: str) -> bool:
        if len(prefix) == 0:
            return False
        return self.root_node.search(prefix, False)

class TrieNode:
    def __init__(self, is_root: bool):
        dict_size = ord('z') - ord('a') + 1
        self.is_root = is_root
        self.dict: List['TrieNode'] = [None] * dict_size
        self.is_end_word = False

    def insert(self, word: str):
        if len(word) == 0:
            return
        key = self.__get_key(word[0])
        if self.dict[key] == None:
            self.dict[key] = TrieNode(False)

        if len(word) == 1:
            self.is_end_word = True
            return

        self.dict[key].insert(word[1:])

    def search(self, word: str, require_end_of_word: bool) -> bool:
        if len(word) == 1:
            is_found = self.dict[self.__get_key(word)] != None
            result = True if is_found and (not require_end_of_word or self.is_end_word) else False
            return result
        elif self.dict[self.__get_key(word[0])] != None:
            return self.dict[self.__get_key(word[0])].search(word[1:], require_end_of_word)
        else:
            return False

    def __get_key(self, k: str) -> int:
        return ord(k) - ord('a')


def test_1():
    trie = Trie()
    assert trie.search('apple') == False

def test_2():
    trie = Trie()
    trie.insert('apple')
    assert trie.search('apple') == True
    assert trie.search('app') == False

def test_3():
    trie = Trie()
    assert trie.search('') == False

def test_4():
    trie = Trie()
    trie.insert('apple')
    assert trie.startsWith('app') == True
    trie.insert('app')
    assert trie.search('app') == True

def test_5():
    trie = Trie()
    assert trie.startsWith('a') == False

def test_6():
    trie = Trie()
    assert trie.search('a') == False

def test_7():
    trie = Trie()
    trie.insert('app')
    trie.insert('apple')
    trie.insert('beer')
    trie.insert('add')
    trie.insert('jam')
    trie.insert('rental')

    assert trie.search('apps') == False
    assert trie.search('app') == True
    assert trie.search('ad') == False
    assert trie.search('applepie') == False
    assert trie.search('rest') == False
    assert trie.search('jan') == False
    assert trie.search('rent') == False
    assert trie.search('beer') == True
    assert trie.search('jam') == True

    assert trie.startsWith('apps') == False
    assert trie.startsWith('app') == True
    assert trie.startsWith('ad') == True
    assert trie.startsWith('applepie') == False
    assert trie.startsWith('rest') == False
    assert trie.startsWith('jan') == False
    assert trie.startsWith('rent') == True
    assert trie.startsWith('beer') == True
    assert trie.startsWith('jam') == True

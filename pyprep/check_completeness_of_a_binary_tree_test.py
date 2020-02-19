# https://leetcode.com/problems/check-completeness-of-a-binary-tree/
# Tags: medium, tree

from utils.binary_tree_node import TreeNode
from typing import List, Deque
from collections import deque
import unittest

class Solution:
    def isCompleteTree(self, root: TreeNode) -> bool:
        queue: Deque[TreeNode] = deque([root])
        while len(queue) > 0:
            node = queue.popleft()
            if not node:
                break
            queue.append(node.left)
            queue.append(node.right)

        result = False if any(queue) else True
        return result

def test_1():
    tree = TreeNode.create_from_list_2([1])
    result = Solution().isCompleteTree(tree)
    assert result == True

def test_2():
    tree = TreeNode.create_from_list_2([1, 2])
    result = Solution().isCompleteTree(tree)
    assert result == True

def test_3():
    tree = TreeNode.create_from_list_2([1, None, 2])
    result = Solution().isCompleteTree(tree)
    assert result == False

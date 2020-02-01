# https://leetcode.com/problems/minimum-depth-of-binary-tree/
# Tags: easy, bfs, dfs

from utils.binary_tree_node import TreeNode
import math
from typing import List, Deque
from collections import deque


class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        queue: Deque[TreeNode] = deque([(root, 1)])
        min_height = math.inf
        while len(queue) > 0:
            node, depth = queue.popleft()
            if not node.left and not node.right:
                return depth
            if node.left:
                queue.append((node.left, depth + 1))
            if node.right:
                queue.append((node.right, depth + 1))
        return min_height


def test_1():
    tree = TreeNode.create_from_list([3, 9, 20, None, None, 15, 7])
    assert Solution().minDepth(tree) == 2

def test_2():
    tree = TreeNode.create_from_list([])
    assert Solution().minDepth(tree) == 0

def test_3():
    tree = TreeNode.create_from_list([1])
    assert Solution().minDepth(tree) == 1

def test_4():
    tree = TreeNode.create_from_list([1, 2, None, 3])
    assert Solution().minDepth(tree) == 3

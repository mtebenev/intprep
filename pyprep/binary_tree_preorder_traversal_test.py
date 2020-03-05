# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
# tags: medium, tree
# todo: there's an interesting solution with dfs

from utils.binary_tree_node import TreeNode
from typing import List, Deque
from collections import deque


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        result = self.preorderTraversal_iterative(root)
        return result

    # Recursive
    def preorderTraversal_recursive(self, root: TreeNode) -> List[int]:
        result = []
        self.preorderTraversal_recursive_r(root, result)
        return result

    def preorderTraversal_recursive_r(self, root: TreeNode, result: List[int]):
        if not root:
            return
        result.append(root.val)
        self.preorderTraversal_recursive_r(root.left, result)
        self.preorderTraversal_recursive_r(root.right, result)

    # Iterative
    def preorderTraversal_iterative(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        stack: Deque[int] = deque()
        current_node = root
        result = [current_node.val]
        while current_node or len(stack) > 0:
            if not current_node:
                current_node = stack.pop()
            else:
                while current_node.left:
                    stack.append(current_node)
                    current_node = current_node.left
                    result.append(current_node.val)

            # -> Inorder result.append(current_node.val)
            if current_node.right:
                current_node = current_node.right
                result.append(current_node.val)
            else:
                current_node = None
        return result

def test_1():
    tree = TreeNode.create_from_list_2([1])
    result = Solution().preorderTraversal(tree)
    assert result == [1]

def test_2():
    tree = TreeNode.create_from_list_2([1, 2, 3])
    result = Solution().preorderTraversal(tree)
    assert result == [1, 2, 3]

def test_3():
    tree = TreeNode.create_from_list_2([1, None, 2, 3])
    result = Solution().preorderTraversal(tree)
    assert result == [1, 2, 3]

def test_4():
    result = Solution().preorderTraversal(None)
    assert result == []

# https://leetcode.com/problems/count-complete-tree-nodes/
# Tags: medium, tree

from utils.binary_tree_node import TreeNode
import unittest

class Solution:
    def countNodes(self, root: TreeNode) -> int:
        # Find the tree height
        height = 0
        node = root
        while node and node.left:
            node = node.left
            height += 1


        # Check for the last node in the last level
        lo = 0
        hi = 2 ** height - 1

        while lo <= hi:
            m = (lo + hi) // 2
            is_exists = self.is_node_exists(root, height, m)
            if is_exists:
                lo = m + 1
            else:
                hi = m - 1

        # Compute
        # Number of all nodes before the last level: 2**height - 1
        # Number of nodes in the last level: lo
        result = 2 ** height - 1 + lo
        return result

    def is_node_exists(self, root: TreeNode, height: int, idx: int) -> bool:
        lo = 0
        hi = 2 ** height - 1
        node = root
        for l in range(height):
            pivot = (lo + hi) // 2
            if idx > pivot:
                node = node.right
                lo = pivot + 1
            else:
                node = node.left
                hi = pivot

        return True if node != None else False

def test_is_exists_1():
    tree = TreeNode.create_from_list_2([1])
    result = Solution().is_node_exists(tree, 0, 0)
    assert result == True

def test_is_exists_2():
    tree = TreeNode.create_from_list_2([1, 2, 3])
    result = Solution().is_node_exists(tree, 1, 1)
    assert result == True

def test_is_exists_3():
    tree = TreeNode.create_from_list_2([0, 0, 1, 0, 1, 2, 3, 0, 1])
    result = Solution().is_node_exists(tree, 3, 0)
    assert result == True

def test_is_exists_4():
    tree = TreeNode.create_from_list_2([0, 0, 1, 0, 1, 2, 3, 0, 1])
    result = Solution().is_node_exists(tree, 3, 2)
    assert result == False

def test_count_1():
    tree = TreeNode.create_from_list_2([0])
    result = Solution().countNodes(tree)
    assert  result == 1

def test_count_2():
    tree = TreeNode.create_from_list_2([0, 0])
    result = Solution().countNodes(tree)
    assert  result == 2

def test_count_3():
    tree = TreeNode.create_from_list_2([0, 0, 1, 0, 1, 2, 3, 0, 1])
    result = Solution().countNodes(tree)
    assert  result == 9

def test_count_4():
    tree = TreeNode.create_from_list_2([0, 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5])
    result = Solution().countNodes(tree)
    assert  result == 13

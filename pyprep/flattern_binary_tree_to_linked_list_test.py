# https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
# Tags: medium, tree

from utils.binary_tree_node import TreeNode
import unittest

class Solution:
    def flatten(self, root: TreeNode) -> None:
        self.flatternR(root)
        return

    def flatternR(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        left_subtree = self.flatternR(root.left)
        right_subtree = self.flatternR(root.right)

        if left_subtree:
            root.right = left_subtree
            root.left = None

            last_left = left_subtree
            if right_subtree:
                while last_left.right:
                    last_left = last_left.right
                last_left.right = right_subtree
        return root

def test_1():
    tree = TreeNode.create_from_list_2([1])
    Solution().flatten(tree)
    assert TreeNode.to_array(tree) == [1]

def test_2():
    tree = TreeNode.create_from_list_2([1,2])
    Solution().flatten(tree)
    assert TreeNode.to_array(tree) == [1, None, 2]

def test_3():
    tree = TreeNode.create_from_list_2([1,2,3])
    Solution().flatten(tree)
    arr = TreeNode.to_array(tree)
    assert TreeNode.to_array(tree) == [1, None, 2, None, None, None, 3]

def test_4():
    tree = TreeNode.create_from_list_2([1,2,5,3, 4, None, 6])
    Solution().flatten(tree)
    arr = TreeNode.to_array(tree)
    assert TreeNode.to_array(tree) == [1, None, 2, None, None, None, 3, None, None, None,None,None,None,None,4,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,5,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,None,6]

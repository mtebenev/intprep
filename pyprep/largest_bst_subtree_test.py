# https://leetcode.com/problems/largest-bst-subtree/
# Tags: medium, tree
# TODO: Not solved yet

from utils.binary_tree_node import TreeNode
import math
from typing import List, Deque, Tuple
from collections import deque

class Solution:
    def largestBSTSubtree(self, root: TreeNode) -> int:
        return 0

def test_1():
    tree = TreeNode.create_from_list([10, 5, 15])
    assert Solution().largestBSTSubtree(tree) == 3

def test_2():
    assert Solution().largestBSTSubtree(None) == 0

def test_3():
    tree = TreeNode.create_from_list([5, 4, None, 1])
    assert Solution().largestBSTSubtree(tree) == 3

def test_4():
    tree = TreeNode.create_from_list([5, 4, None, 10])
    assert Solution().largestBSTSubtree(tree) == 1

def test_5():
    tree = TreeNode.create_from_list([5, 10])
    assert Solution().largestBSTSubtree(tree) == 1

def test_6():
    tree = TreeNode.create_from_list([10,5,15,1,8,None,7])
    assert Solution().largestBSTSubtree(tree) == 3

def test_7():
    tree = TreeNode.create_from_list([3,2,4,None,None,1])
    assert Solution().largestBSTSubtree(tree) == 2

def test_8():
    tree = TreeNode.create_from_list([5,1,None, None, 10])
    assert Solution().largestBSTSubtree(tree) == 2

def test_9():
    tree = TreeNode.create_from_list([1])
    assert Solution().largestBSTSubtree(tree) == 1

def test_10():
    tree = TreeNode.create_from_list([5,1,None, None, 10])
    assert Solution().is_valid_bst_r(tree, -math.inf, math.inf) == False

def test_11():
    tree = TreeNode.create_from_list_2([5,None,2,1,None,None,4,3])
    assert Solution().largestBSTSubtree(tree) == 3

def test_12():
    tree = TreeNode.create_from_list_2([2,1,None,None,4,3])
    assert Solution().is_valid_bst_r(tree, -math.inf, math.inf) == False

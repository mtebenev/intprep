# https://leetcode.com/problems/subtree-of-another-tree/
# Tags: easy, tree

from utils.binary_tree_node import TreeNode


class Solution:
    def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
        if not s:
            return False

        if self.compare(s, t):
            return True

        return self.isSubtree(s.left, t) or self.isSubtree(s.right, t)

    def compare(self, s: TreeNode, t: TreeNode):
        if not s and not t:
            return True
        if not s or not t:
            return False
        if s.val == t.val:
            is_left = self.compare(s.left, t.left)
            is_right = self.compare(s.right, t.right)
            return is_left and is_right

        return False

def test_1():
    s = TreeNode.create_from_list([3, 4, 5, 1, 2])
    t = TreeNode.create_from_list([4, 1, 2])
    result = Solution().isSubtree(s, t)
    assert result == True


def test_2():
    s = TreeNode.create_from_list([3, 4, 5, 1, 2, None, None, None, None, 0])
    t = TreeNode.create_from_list([4, 1, 2])
    result = Solution().isSubtree(s, t)
    assert result == False

def test_3():
    result = Solution().isSubtree(None, None)
    assert result == False

def test_4():
    s = TreeNode.create_from_list([1])
    t = TreeNode.create_from_list([1])
    result = Solution().isSubtree(s, t)
    assert result == True

def test_5():
    s = TreeNode.create_from_list([1, 1])
    t = TreeNode.create_from_list([1])
    result = Solution().isSubtree(s, t)
    assert result == True

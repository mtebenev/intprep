from utils.binary_tree_node import TreeNode
from typing import List, Deque
from collections import deque
import itertools

# https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
# tags: medium, tree
# todo: there's an interesting solution with dfs


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        if root == None:
            return []
        result = []
        queue: Deque[TreeNode] = deque([root, None])
        is_left_to_right = True
        level_items: Deque[int] = deque()
        while len(queue) > 0:
            node = queue.popleft()
            if node:
                # Next nodes
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)

                # Add to level
                if is_left_to_right:
                    level_items.append(node.val)
                else:
                    level_items.appendleft(node.val)

            else:  # level finish
                is_left_to_right = not is_left_to_right
                result.append(list(level_items))
                level_items = deque()
                if len(queue) > 0:
                    queue.append(None)
        return result


def test_1():
    tree = TreeNode.create_from_list([1])
    result = Solution().zigzagLevelOrder(tree)

    assert result == [[1]]


def test_2():
    tree = TreeNode.create_from_list([1, 2, 3])
    result = Solution().zigzagLevelOrder(tree)

    assert result == [[1], [3, 2]]


def test_3():
    tree = TreeNode.create_from_list(
        [1, 2, 3, 4, 5, None, 6, 7, None, None, None, None, None, None, 8])
    result = Solution().zigzagLevelOrder(tree)

    assert result == [
        [1],
        [3, 2],
        [4, 5, 6],
        [8, 7]
    ]

def test_null_inputs():
    result = Solution().zigzagLevelOrder(None)
    assert result == []

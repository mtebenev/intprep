from utils.binary_tree_node import TreeNode
from typing import List, Deque
from collections import deque

# https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
# tags: medium, tree
# todo: there's also an interesting two-pass approach

class TreeNodeEx(TreeNode):
    def __init__(self, x: int):
        super().__init__(x)
        self.next = None

# Special implementation because unlike JS/TS accessing an undefined member raises an exception
def create_from_list_ex(values: List[int]) -> TreeNodeEx:
    root_value = values[0]
    if root_value == None:
        raise Exception('Invalid tree')

    root = TreeNodeEx(root_value)
    nodeQueue: Deque[TreeNodeEx] = deque()
    nodeQueue.append(root)

    for index in range(1, len(values), 2):
        node = nodeQueue.popleft()
        if index < len(values) and values[index] != None:
            leftValue = values[index]
            node.left = TreeNodeEx(leftValue)
            nodeQueue.append(node.left)

        if index + 1 < len(values) and values[index + 1] != None:
            rightValue = values[index + 1]
            node.right = TreeNodeEx(rightValue)
            nodeQueue.append(node.right)

    return root


class Solution:
    def connect(self, root: TreeNodeEx) -> TreeNodeEx:
        return self.connect_iterative(root)

    def connect_iterative(self, root: TreeNodeEx) -> TreeNodeEx:
        p2 = root
        while p2 != None:
            current_parent: TreeNodeEx = p2
            left_sibling: TreeNodeEx = None
            next_level_first: TreeNodeEx = None
            while current_parent != None:
                n = current_parent.left if current_parent.left else current_parent.right
                if not next_level_first and n:
                    next_level_first = n
                if left_sibling and n:
                    left_sibling.next = n
                if current_parent.left and current_parent.right:
                    current_parent.left.next = current_parent.right
                if current_parent.left or current_parent.right:
                    left_sibling = current_parent.right if current_parent.right else current_parent.left
                current_parent = current_parent.next

            p2 = next_level_first
        return root


class ConnectionTester:
    @staticmethod
    def to_array(root: TreeNodeEx) -> List[int]:
        queue: Deque[TreeNodeEx] = deque([root])
        result = []
        while len(queue) > 0:
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
            next_val = node.next.val if node.next else None
            result.append(next_val)
        return result


def test_1():
    tree = create_from_list_ex([1])
    Solution().connect(tree)

    next_arr = ConnectionTester.to_array(tree)
    assert next_arr == [None]


def test_2():
    tree = create_from_list_ex([1, 2, 3, 4, 5, 6, 7])
    Solution().connect(tree)

    next_arr = ConnectionTester.to_array(tree)
    assert next_arr == [None, 3, None, 5, 6, 7, None]

def test_3():
    tree = create_from_list_ex([1, 2, 3])
    Solution().connect(tree)

    next_arr = ConnectionTester.to_array(tree)
    assert next_arr == [None, 3, None]

def test_4():
    tree = create_from_list_ex([1, 2, 3, 4])
    Solution().connect(tree)

    next_arr = ConnectionTester.to_array(tree)
    assert next_arr == [None, 3, None, None]

def test_5():
    tree = create_from_list_ex([1, 2, 3, None, None, None, 4])
    Solution().connect(tree)

    next_arr = ConnectionTester.to_array(tree)
    assert next_arr == [None, 3, None, None]

def test_8():
    tree = create_from_list_ex([1, 2, 3, 4, 5, None, 6, 7, None, None, None, None, 8])
    Solution().connect(tree)

    next_arr = ConnectionTester.to_array(tree)
    assert next_arr == [None, 3, None, 5, 6, None, 8, None]

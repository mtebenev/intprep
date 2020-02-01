from typing import List, Deque
from collections import deque
from itertools import filterfalse

class TreeNode:
    def __init__(self, x: int):
        self.val = x
        self.left = None
        self.right = None

    @staticmethod
    def create_from_list(values: List[int]):
        if len(values) == 0:
            return None
        root_value = values[0]
        if root_value == None: raise Exception('Invalid tree')

        root = TreeNode(root_value)
        node_queue: Deque[TreeNode] = deque()
        node_queue.append(root)

        index = 1
        while index < len(values):
            node = node_queue.popleft()

            left_node = None
            right_node = None
            if index < len(values):
                left_value = values[index]
                left_node = TreeNode(left_value) if left_value != None else None
                node_queue.append(left_node)
                index += 1

            if index < len(values):
                right_value = values[index]
                right_node = TreeNode(right_value) if right_value != None else None
                node_queue.append(right_node)
                index += 1

            if node:
                node.left = left_node
                node.right = right_node

        return root

    # Follows LC compressed format (if a node has no children then [None, None] omitted)
    @staticmethod
    def create_from_list_2(values: List[int]):
        if len(values) == 0:
            return None
        root_value = values[0]
        if root_value == None: raise Exception('Invalid tree')

        root = TreeNode(root_value)
        node_queue: Deque[TreeNode] = deque()
        node_queue.append(root)

        index = 1
        while index < len(values):
            node = node_queue.popleft()
            if not node:
                continue

            left_node = None
            right_node = None
            if index < len(values):
                left_value = values[index]
                left_node = TreeNode(left_value) if left_value != None else None
                index += 1

            if index < len(values):
                right_value = values[index]
                right_node = TreeNode(right_value) if right_value != None else None
                index += 1

            if left_node or right_node:
                node_queue.append(left_node)
                node_queue.append(right_node)

            node.left = left_node
            node.right = right_node

        return root

    # Full tree levels dump
    @staticmethod
    def to_array(root) -> List[int]:
        node_queue: Deque = deque()
        result: List[int] = []
        node_queue.append(root)
        while len(node_queue) > 0:
            node = node_queue.popleft()
            if node != None:
                result.append(node.val)
                node_queue.append(node.left)
                node_queue.append(node.right)
            else:
                result.append(None)
                if any(node_queue):
                    node_queue.append(None)
                    node_queue.append(None)


        last_pos = len(result) - 1
        none_count = 0
        while result[last_pos] == None:
            last_pos -= 1
            none_count += 1

        return result[:-none_count]


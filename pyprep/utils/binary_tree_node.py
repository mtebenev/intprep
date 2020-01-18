from typing import List, Deque
from collections import deque

class TreeNode:
    def __init__(self, x: int):
        self.val = x
        self.left = None
        self.right = None

    @staticmethod
    def create_from_list(values: List[int]):
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

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

        for index in range(1, len(values), 2):
            node = node_queue.popleft()

            left_value = values[index]
            left_node = TreeNode(left_value) if left_value != None else None
            node_queue.append(left_node)

            right_value = values[index + 1]
            right_node = TreeNode(right_value) if right_value != None else None
            node_queue.append(right_node)

            if node:
                node.left = left_node
                node.right = right_node

        return root

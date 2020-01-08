from binary_tree_node import TreeNode

def test_1():
    tree = TreeNode.create_from_list([3, 9, 20, None, None, 15, 7])
    assert tree.val == 3
    assert tree.left.val == 9
    assert tree.right.val == 20

    assert tree.left.left == None
    assert tree.left.right == None

    assert tree.right.left.val == 15
    assert tree.right.right.val == 7

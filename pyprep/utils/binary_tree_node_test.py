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

def test_compressed_from_list_1():
    tree = TreeNode.create_from_list_2([1, 2])
    assert TreeNode.to_array(tree) == [1, 2]

def test_compressed_from_list_2():
    tree = TreeNode.create_from_list_2([1, None, 2, 3, 4])
    assert TreeNode.to_array(tree) == [1, None, 2, None, None, 3, 4]

def test_compressed_from_list_3():
    tree = TreeNode.create_from_list_2([1, None, 2, 3, None, 4, 5])
    assert TreeNode.to_array(tree) == [1, None, 2, None, None, 3, None, None, None, None, None, 4, 5]

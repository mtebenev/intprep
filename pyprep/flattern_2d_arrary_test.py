from typing import List

# https://leetcode.com/problems/flatten-2d-vector/
# Tags: medium, design

class Vector2D:

    def __init__(self, v: List[List[int]]):
        self._data = v
        self._list_pos = 0
        self._in_list_pos = -1
        self._move_next()


    def next(self) -> int:
        if not self.hasNext():
            raise Exception('Invalid call')
        result = self._data[self._list_pos][self._in_list_pos]
        self._move_next()
        return result


    def hasNext(self) -> bool:
        return self._list_pos < len(self._data) and self._in_list_pos < len(self._data[self._list_pos])

    def _move_next(self):
        while self._list_pos < len(self._data):
            while self._in_list_pos < len(self._data[self._list_pos]):
                self._in_list_pos += 1
                if self._in_list_pos < len(self._data[self._list_pos]):
                    return
            self._list_pos += 1
            self._in_list_pos = 0
            if self.hasNext():
                return

# (C) Ipeq1
class Vector2DX1(object):
    def __init__(self, vec2d):
        self.vec2d, self.x, self.y = vec2d, 0, 0
        while self.y < len(self.vec2d) and not self.x < len(self.vec2d[self.y]):
            self.x, self.y = 0, self.y + 1


    def next(self):
        ans = self.vec2d[self.y][self.x]
        self.x += 1
        while self.y < len(self.vec2d) and not self.x < len(self.vec2d[self.y]):
            self.x, self.y = 0, self.y + 1
        return ans

    def hasNext(self):
        return self.y < len(self.vec2d)


def test_1():
    vector = Vector2D([[1,2],[3,4]])

    assert vector.next() == 1
    assert vector.hasNext() == True
    assert vector.next() == 2
    assert vector.next() == 3
    assert vector.next() == 4
    assert vector.hasNext() == False

def test_2():
    vector = Vector2D([[],[3,4]])

    assert vector.next() == 3
    assert vector.next() == 4
    assert vector.hasNext() == False

def test_3():
    vector = Vector2D([[]])
    assert vector.hasNext() == False

def test_4():
    vector = Vector2D([[],[]])
    assert vector.hasNext() == False

def test_5():
    vector = Vector2D([[1,2], [], [],[3,4]])

    assert vector.next() == 1
    assert vector.next() == 2
    assert vector.next() == 3
    assert vector.next() == 4
    assert vector.hasNext() == False

def test_6():
    vector = Vector2D([[1,2], [3,4], []])

    assert vector.next() == 1
    assert vector.next() == 2
    assert vector.next() == 3
    assert vector.next() == 4
    assert vector.hasNext() == False

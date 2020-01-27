# https://leetcode.com/problems/number-of-islands/
# Tags: medium, bfs, dfs

from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        return self.numIslands_dfs(grid)

    def numIslands_dfs(self, grid: List[List[str]]) -> int:
        if grid == None or len(grid) == 0:
            return 0

        result = 0
        for i, row in enumerate(grid):
            for j, value in enumerate(row):
                if value == '1':
                    self.dfs(grid, i, j)
                    result += 1

        return result

    def dfs(self, grid: List[List[str]], i: int, j: int):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != '1':
            return
        grid[i][j] = '.'
        self.dfs(grid, i - 1, j)
        self.dfs(grid, i + 1, j)
        self.dfs(grid, i, j - 1)
        self.dfs(grid, i, j + 1)


def test_1():
    grid = [
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
    ]
    assert Solution().numIslands(grid) == 1

def test_2():
    grid = [
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
    ]
    assert Solution().numIslands(grid) == 3


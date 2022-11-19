// LEETCODE # 695. Max Area of Island
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.
/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  let counter = 0;

  const dfs = (i, j) => {
    if (i >= 0 && j >= 0 && i < grid.length && j < grid[i].length && grid[i][j] === 1) {
      localcounter++;
      grid[i][j] = 0;
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 1) {
        var localcounter = 0;
        dfs(i, j);
        counter = Math.max(counter, localcounter);
      }
    }
  }

  return counter;
};

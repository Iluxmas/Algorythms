// LEETCODE # 733. Flood Fill
// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, color) {
  if (image && image.length > 0) {
    let curr = image[sr][sc];
    if (curr === color) return image;
    floodFillChange(image, sr, sc, color, curr);
  }

  return image;
};

var floodFillChange = function (image, sr, sc, color, org) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
  let curr = image[sr][sc];
  if (curr === org) {
    image[sr][sc] = color;
    // down
    floodFillChange(image, sr - 1, sc, color, curr);
    // up
    floodFillChange(image, sr + 1, sc, color, curr);
    // left
    floodFillChange(image, sr, sc - 1, color, curr);
    // right
    floodFillChange(image, sr, sc + 1, color, curr);
  }
  return;
};

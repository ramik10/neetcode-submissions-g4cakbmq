class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    let lowRow = 0;
    let highRow = matrix.length - 1;
    let targetRow = -1;

    // 1. Binary search to find the potential row
    while (lowRow <= highRow) {
        let mid = Math.floor(lowRow + (highRow - lowRow) / 2);
        if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
            targetRow = mid;
            break;
        } else if (target < matrix[mid][0]) {
            highRow = mid - 1;
        } else {
            lowRow = mid + 1;
        }
    }

    if (targetRow === -1) return false;

    let row = matrix[targetRow];
    let left = 0;
    let right = row.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (row[mid] === target) return true;
        if (row[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return false;
    }
}

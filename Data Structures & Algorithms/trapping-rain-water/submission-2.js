class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
    let total = 0;
    let i = 0;
    let j = 1;
    let arr = [];
    while (j < height.length) {
        if (height[i] <= height[j]) {
            total += arr.reduce((p, r) => p + r, 0);
            i = j;
            arr = [];
        } else {
            arr.push(height[i] - height[j]);
        }
        j++;
    }
    let peak = i
    i = height.length - 1;
    j = i - 1;
    arr = [];

    while (j >= peak) {
        if (height[i] <= height[j]) {
            total += arr.reduce((p, r) => p + r, 0);
            i = j;
            arr = [];
        } else {
            arr.push(height[i] - height[j]);
        }
        j--;
    }

    return total;
}
}

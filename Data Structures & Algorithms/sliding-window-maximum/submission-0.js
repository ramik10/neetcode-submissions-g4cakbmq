class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
       const deque = new Deque();
        const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (!deque.isEmpty() && deque.front() === i - k) {
            deque.popFront();
        }
        while (!deque.isEmpty() && nums[deque.back()] < nums[i]) {
            deque.popBack();
        }

        deque.pushBack(i);
        if (i >= k - 1) {
            result.push(nums[deque.front()]);
        }
    }
    return result;
    }
}

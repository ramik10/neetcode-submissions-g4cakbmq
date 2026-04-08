class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();
        for (let n of nums){
            set.add(n)
        }
        if(set.size==nums.length){
            return false
        } else{
            return true
        }
    }
}

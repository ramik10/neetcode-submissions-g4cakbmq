class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const index = {}
        for (let i=0; i<nums.length;i++){
            const diff = target - nums[i]
            if(index[diff]!==undefined){
                return [index[diff], i]
            }
            index[nums[i]] = i;
        }
        for (let v in index){
            const i = index[v];
            const diff = target - parseInt(v)
            if(index[diff]!==undefined && index[diff]!==i){
                return [i, index[diff]].sort((a, b) => a - b)
            }
        }
        return []
    }


}
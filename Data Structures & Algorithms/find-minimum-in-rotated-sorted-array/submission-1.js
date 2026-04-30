class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];
        while(l<=r){
            const mid = l + Math.floor((r-l)/2)
            if(nums[l]<=nums[r]){
                if(nums[l]<res){
                    res = nums[l]
                }
                console.log("breaking")
                break
            }
            if (nums[mid] < res) res = nums[mid];
            if(nums[mid]>=nums[l]){
                l = mid+1
                console.log("here")
            } else{
                r = mid 
                console.log("here2")
            }
        }
        return res
    }
}

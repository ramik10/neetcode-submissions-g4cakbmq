class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        for(let i = 0; i<nums.length;i++){
            let prod = 1
            for(let j=0;j<nums.length;j++){
                if(i!==j){
                prod= prod*nums[j]
                console.log(prod)
                }
            }
            arr.push(prod)
        }
        return arr
    }
}

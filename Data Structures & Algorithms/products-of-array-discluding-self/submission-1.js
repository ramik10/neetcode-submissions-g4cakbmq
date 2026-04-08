class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        let zero_count=0;
        let zero_idx;
        let prod =1;
        for(let i=0;i<nums.length;i++){
            if(nums[i]===0){
               zero_count = zero_count+1
               zero_idx=i
            } else{
               prod = prod*nums[i]
            }
        }
        if(zero_count>1){
            const zeroFilledArray = Array(nums.length).fill(0)
            return zeroFilledArray;
        } else if (zero_count===1) {
            const zeroFilledArray = Array(nums.length).fill(0)
            zeroFilledArray[zero_idx]=prod
            return zeroFilledArray;
        }
        for(let i = 0; i<nums.length;i++){
            let mul = prod/nums[i]
            arr.push(mul)
        }
        return arr;
    }
}

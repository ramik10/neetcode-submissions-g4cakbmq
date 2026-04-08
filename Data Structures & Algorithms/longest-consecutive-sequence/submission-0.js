class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const tempSet = new Set(nums)

        let mainCount= 0;

        for(let num of tempSet){
            if(!tempSet.has(num-1)){
                let length =1 
                while(tempSet.has(num+length)){
                    length++;
                }
                mainCount = Math.max(mainCount,length)
            }
        }
        return mainCount
        
}
}

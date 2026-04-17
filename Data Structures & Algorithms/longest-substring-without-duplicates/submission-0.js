class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         const hashset = new Set()
         let left = 0
         let right =0
         let max = 0
         while(right<s.length){
            if(hashset.has(s.charAt(right))){
                hashset.delete(s.charAt(left));
                left++;
            } else{
            hashset.add(s.charAt(right))
                const current = right-left+1
                max = Math.max(max,current)
            right++
            }
         }
         return max
    }
}

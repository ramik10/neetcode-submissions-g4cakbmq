class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        for(let i=0; i<str.length;i++){
            const j = str.length-1-i
            if(i>j) break;
            if(!(str[i]===str[j])){
                return false
            }
        }
        return true
    }
}

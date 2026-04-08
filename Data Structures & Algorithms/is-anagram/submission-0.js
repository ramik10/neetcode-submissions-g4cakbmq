class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length!== t.length){
            return false
        }
        for (let n of t){
            s = s.replace(n,"");
        }
        if(s.length===0){
            return true
        } else{
            return false
        }
    }
}

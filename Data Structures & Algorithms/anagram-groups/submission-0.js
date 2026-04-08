class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output_arr = [];
        const index_map = {};
        for (let i = 0; i<strs.length; i++){
            const sorted_str = strs[i].split("").sort().join("");
            if(index_map[sorted_str]===undefined){
                index_map[sorted_str]=output_arr.length
                output_arr[output_arr.length]=[strs[i]]
            } else{
                const index = index_map[sorted_str];
                output_arr[index].push(strs[i])
            }
        }
        return output_arr
    }
}

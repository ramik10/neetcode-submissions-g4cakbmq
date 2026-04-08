class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const nmap = {}
        for (let i=0;i<nums.length;i++){
            if(nmap[nums[i]]!==undefined){
                nmap[nums[i]]+=1;
            } else{
                nmap[nums[i]]=1;
            }
        }
        // console.log(nmap)
        const entriesArray = Object.entries(nmap)
        // console.log(entriesArray)
        entriesArray.sort((a, b) => b[1] - a[1]);


        const topTwoKeys = entriesArray.slice(0, k).map(entry => parseInt(entry[0]));
        return topTwoKeys
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = nums.sort((a,b)=>a-b)
        const newArr = new Set()
        for(let i =0;i<arr.length-2;i++){
            const target = 0 - arr[i]
            let j=i+1;
            let k=arr.length-1
            while(j<k){
                if(arr[j]+arr[k]>target){
                    k--;
                    continue;
                }
                if(arr[j]+arr[k]<target){
                    j++;
                    continue
                }
                if(arr[j]+arr[k]===target){
                    newArr.add(JSON.stringify([arr[i],arr[j],arr[k]]))
                    j++
                    k--
                }
            }
        }
        const output = Array.from(newArr);
        return output.map(s=>JSON.parse(s))
    }
}

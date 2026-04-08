class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        function area(i,j){
            if(heights[i]>heights[j]){
                return (j-i)*heights[j]
            } else{
                return (j-i)*heights[i]
            }
        }

        let max = 0;
        let i =0;
        let j = heights.length-1
        while(i<j){
            const temp = area(i,j)
            if(max<temp){
                max=temp
            }
            if(heights[i]<heights[j]){
                i++
            } else{
                j--
            }
        }
        return max
    }
}

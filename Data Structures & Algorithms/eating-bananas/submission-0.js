class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        let min = right
        while(left<=right){
            const mid = Math.floor(left + (right-left)/2)
            const time_taken = (()=>{
                let total = 0
                for(let i = 0; i< piles.length; i++){
                   total = total + Math.ceil(piles[i]/mid)
                }
                return total
            })()
            if(h>=time_taken){
                right = mid - 1
                min = mid
            }
            if(h<time_taken){
                left = mid+1
            }
        }
        return min
    }
}

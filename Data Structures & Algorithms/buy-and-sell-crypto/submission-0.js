class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left =0
        let right = 0
        let profit = 0
        while(right<prices.length){
            if(prices[left]<prices[right]){
                let currentProfit = prices[right] - prices[left];
                profit=Math.max(profit,currentProfit)
            }else{
                left=right
            }
            right++
        }
        return profit
    }
}

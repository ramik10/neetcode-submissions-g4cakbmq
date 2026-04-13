class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = position.map((p,i)=>[p,speed[i]])
        const sorted =  cars.sort((a,b)=> b[0]-a[0])
        const stack = []
        for(let i=0; i<sorted.length;i++){
            const time = (target-sorted[i][0])/sorted[i][1]
            if((stack.length===0) || (time>stack[stack.length-1])){
                stack.push(time)
            }
        }
        return stack.length
    }
}

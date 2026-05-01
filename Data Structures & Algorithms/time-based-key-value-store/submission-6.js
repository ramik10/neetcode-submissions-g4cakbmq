class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            const arr = this.keyStore.get(key)
            arr.push([value,timestamp])
            this.keyStore.set(key,arr)
        }else{
            this.keyStore.set(key,[[value,timestamp]])
        }
        return null
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        console.log(this.keyStore.has(key), "key")
        if(!this.keyStore.has(key)){
            return ""
        }
        const arr = this.keyStore.get(key)
        let l = 0
        let r = arr.length - 1
        let prev_value = ""
        while(l<=r){
            let m = l + Math.floor((r-l)/2)
            if(timestamp===arr[m][1]){
                return arr[m][0]
            }
            if(timestamp>arr[m][1]){
                prev_value = arr[m][0]
            }
            if(timestamp>arr[m][1]){
                l=m+1
            }
            if(timestamp<arr[m][1]){
                r=m-1
            }
        }
        return prev_value
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const arr = []
        for (let i=0; i<strs.length; i++){
            const len = strs[i].length;
            arr[i] = len+ "#"+ strs[i] 
        }
        const str = arr.join("")
        console.log(str);
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        let i = 0
        while (i<str.length){
            const idx = str.indexOf("#",i)
            const length = parseInt(str.substring(i,idx))
            let content = str.substring(idx+1,idx+1+length)
            decoded.push(content)
            i=idx+1+length
        }
        return decoded
    }
}

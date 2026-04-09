class MinStack {
    #stackarr
    #minarr
    constructor() {
        this.#stackarr=[]
        this.#minarr=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        console.log(this.#stackarr,"push")
        this.#stackarr.push(val)
        if(this.#minarr.length===0){
            this.#minarr.push(val)
        } else if(this.#minarr[this.#minarr.length-1]>val){
            this.#minarr.push(val)
        } else{
            this.#minarr.push(this.#minarr[this.#minarr.length-1])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        console.log(this.#stackarr,"pop")
        if(this.#stackarr.length>0){
        this.#minarr.pop()
        this.#stackarr.pop()
        } else{
            throw new Error("stack empty")
        }

    }

    /**
     * @return {number}
     */
    top() {
        return this.#stackarr[this.#stackarr.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#minarr[this.#minarr.length-1]
    }
}

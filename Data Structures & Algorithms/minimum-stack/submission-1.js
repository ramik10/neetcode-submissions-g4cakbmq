class MinStack {
    #stackarr
    #minarr
    #top
    constructor() {
        this.#stackarr=[]
        this.#minarr=[]
        this.#top=-1
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
        } else if(this.#minarr[this.#top]>val){
            this.#minarr.push(val)
        } else{
            this.#minarr.push(this.#minarr[this.#top])
        }
        this.#top++
    }

    /**
     * @return {void}
     */
    pop() {
        console.log(this.#stackarr,"pop")
        if(this.#stackarr.length>0){
        this.#minarr.pop()
        this.#stackarr.pop()
        this.#top--
        } else{
            throw new Error("stack empty")
        }

    }

    /**
     * @return {number}
     */
    top() {
        return this.#stackarr[this.#top]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.#minarr[this.#top]
    }
}

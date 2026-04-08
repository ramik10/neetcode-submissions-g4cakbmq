class Stack {
    #stackarr;
   constructor(capacity){
    if(capacity<1 || capacity>1000) throw new Error("capacity not allowed")
    this.capacity = capacity
    this.#stackarr = []
    this.top = -1;
   }
   
   
   push(e){
      if(this.top+1>=this.capacity){
        throw new Error("limit reached")
      }
      this.#stackarr.push(e)
      this.top = this.top +1
   }
   pop(){
    if(this.top===-1){
        throw new Error("nothing to pop")
    }
    this.#stackarr.splice(this.top,1)
    this.top=this.top-1
   }
   get length() {
        return this.top + 1;
    }
    get topElement(){
        return this.#stackarr[this.top];
    }
    get display(){
        return this.#stackarr
    }
}
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = new Stack(1000)
        const pairs = { ')': '(', ']': '[', '}': '{' };
        if(s.length<=0){
            return false
        }
        for(let i=0; i<s.length; i++){
            if (pairs[s[i]]) { 
            if (stack.length === 0 || stack.topElement !== pairs[s[i]]) {
                return false; 
            }
            stack.pop();
        } 
        else {
            stack.push(s[i]); 
        }
        }
        if(stack.length===0){
            return true
        } else{
            return false
        }
    }
}

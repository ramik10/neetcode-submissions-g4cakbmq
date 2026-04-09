class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for(let i=0;i<tokens.length;i++){
            if((tokens[i] === "+") || (tokens[i] === "-") || (tokens[i] === "*") || (tokens[i] === "/")){
                const num2 = Number(stack.pop())
                const num1 = Number(stack.pop())
                switch (tokens[i]){
                    case "+": 
                     stack.push(num1+num2)
                     break;
                    case "-": 
                     stack.push(num1-num2)
                    break;
                    case "*": 
                    stack.push(num1*num2)
                    break;
                    case "/": 
                    stack.push(Math.trunc(num1/num2))
                    break;
                }
            } else{
                stack.push(tokens[i])
            }
        }
        return stack.pop()
    }
}

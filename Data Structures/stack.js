// Stacks are LIFO: Last In, First Out
// ? Stack insertions are O(1)
// ? Stack deletions are O(1)
// * Stack searches are O(n)

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if(this.stack.length > 0)
            return this.stack.pop();
        else throw new Error('There is nothing to pop!')
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    toString() {
        return JSON.stringify(this.stack);
    }
}

const stack = new Stack();
stack.push(1);
stack.push(1);
stack.push(1);

stack.pop();
stack.pop();
stack.pop();

console.log(`${stack}`);
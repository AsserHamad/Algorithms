// Queues are FIFO: First in First Out
// ? Queue insertions are O(1)
// ? Queue deletions are O(1)
// * Queue searches are O(n)

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(entry) {
        if(Array.isArray(entry))
            this.queue = [...entry, ...this.queue];
        else
            this.queue = [entry, ...this.queue];
    }

    dequeue() {
        return this.queue.pop();
    }

    size() {
        return this.queue.length;
    }

    toString() {
        return JSON.stringify(this.queue);
    }
}

module.exports = Queue;
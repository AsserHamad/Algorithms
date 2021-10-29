// Linked Lists
// ? Insertions are O(1)
// ! Deletions are O(n)
// ! Searches are O(n)

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    next(node) {
        this.next = node;
    }

}

class LinkedList {
    constructor(head = null){
        this.head = head;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let node = new Node(data);
        if(this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.next)
                current = current.next;
            current.next = node;
            this.tail = node;
        }
        this.length++;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toString() {
        let current = this.head;
        let string = current ? `${current.data}` : '';
        while(current?.next) {
            current = current.next;
            string += ` => ${current.data}`;
        }
        return string;
    }
}
 
const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(`${list}`)

export default LinkedList;
// BFS: Breadth First Search
// Used to find the shortest path to an item

const Queue = require('./Data Structures/queue');

const bfs = (start = 'asser', check = () => false, graph = {}) => {
    const queue = new Queue();
    const checked = [];
    queue.enqueue(start);
    while(queue.size) {
        let checked_data = queue.dequeue();
        if(check(checked_data)) {
            return checked_data;
        } else {
            if(!checked.includes(checked_data)){
                checked.push(checked_data);
                const new_elements = graph[checked_data];
                if(new_elements){
                    queue.enqueue(new_elements);
                }
            }
        }
    }
    return null;
}

const network = {
    asser: ['yara', 'amer', 'omar'],
    yara: ['mariam', 'nada'],
    amer: ['karim', 'ahmed', 'sofian'],
    ahmed: ['ali', 'reham'],
    omar: ['asser']
};

const check = name => {
    return /m$/.test(name);
}

console.log(bfs('asser', check, network));
function mincost(arr) { 
//write your code here
// return the min cost

const PriorityQueue = require('priorityqueuejs');
    const minHeap = new PriorityQueue((a, b) => b - a);

    // Push all rope lengths into the min-heap
    for (let i = 0; i < arr.length; i++) {
        minHeap.enq(arr[i]);
    }

    let totalCost = 0;

    // Keep connecting ropes until we have only one rope left
    while (minHeap.size() > 1) {
        // Extract the two smallest lengths
        let first = minHeap.deq();
        let second = minHeap.deq();

        // Cost to connect them
        let cost = first + second;
        totalCost += cost;

        // Push the resulting rope back into the min-heap
        minHeap.enq(cost);
    }

    return totalCost;
}

module.exports=mincost;

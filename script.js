function mincost(arr) { 
//write your code here
// return the min cost

	const MinHeap = require('collections/heap');
	
	const minHeap = new MinHeap(arr, null, (a, b) => b - a);
	
	let totalCost = 0;
	
	while (minHeap.length > 1) {
		const first = minHeap.pop();
		const second = minHeap.pop();
		const cost = first + second;
		minHeap.push(cost);
		totalCost += cost;
	}
	return totalCost;
}

module.exports=mincost;

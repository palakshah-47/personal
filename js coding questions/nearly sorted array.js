class MinBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    remove_top() {
        let val = this.values[0];
        this.values.shift();        
        return val;
    }
}


function nearlySorted(arr, num, k) {
      let minHeap = new MinBinaryHeap();
      let res = [];
      
    for(let i = 0; i <= k; i++){
        minHeap.insert(arr[i]);
    }
      
      for(let i = k+1; i < num; i++){          
          res.push(minHeap.remove_top());        
          minHeap.insert(arr[i]);
      }
      
      while(minHeap.values.length){
          res.push(minHeap.remove_top());
      }
       
    return res;
}

console.log(nearlySorted([6, 5, 3, 2, 8, 10, 9], 7, 3));
  
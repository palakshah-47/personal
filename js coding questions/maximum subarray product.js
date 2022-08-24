function maxProduct(arr,n){
        if(!arr.length) return 0;
        if(arr.length === 1) return arr[0];
       let preMax = arr[0];
       let preMin = arr[0];
       let maxProduct = arr[0];
       
       for(let i = 1; i < arr.length; i++){
           let curMax = Math.max(preMin * arr[i], preMax * arr[i], arr[i]);
           let curMin = Math.min(preMin * arr[i], preMax * arr[i], arr[i]);
           
            preMax = curMax;
           preMin = curMin;
           
           maxProduct = Math.max(maxProduct, curMax);
           
          
           
       }
       return maxProduct;
}
    
console.log(maxProduct([6, -3, -10, 0, 2], 5));
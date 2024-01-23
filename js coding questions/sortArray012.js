const sortArrayWith012 = (arr) => {
    // let arr = [...nums];
    let low = 0, mid = 0, high = arr.length-1;

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
            console.log(arr);            
        } else if(arr[mid] === 1){
            mid++;
            console.log(arr);            
        } else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
            console.log(arr);           
        }       
    }
    
}

sortArrayWith012([0,0,1,2,0,2,2,1,1,0,0,0,2,2,1,1]);
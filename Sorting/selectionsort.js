function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        lowest = i;
        for(let j=0; j< arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

selectionSort([34,22,19,10,17])
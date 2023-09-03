function pivot(arr, start = 0 , end = arr.length+1){

    function swap(array, i, j){
        var temp = arr[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot  = arr[start];
    var swapIndex = start;

    for(var i = start; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

//es 2015
function pivot(arr, start = 0 , end = arr.length-1){

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]];
    };

    let pivot  = arr[start];
    let swapIndex = start;

    for(let i = start+1; i <= end; i++){
        if(pivot > arr[i]){
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quicksort( arr, left = 0, right = arr.length - 1 ){
    if(left<right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}
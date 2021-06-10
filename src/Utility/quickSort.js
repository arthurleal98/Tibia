function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right,selector,ordem) {
    var pivot   = items[Math.floor((right + left) / 2)][selector], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        if(ordem===0){
            while (items[i][selector] < pivot) {
                i++;
            }
            while (items[j][selector] > pivot) {
                j--;
            }
        }
        else{
            while (items[i][selector] > pivot) {
                i++;
            }
            while (items[j][selector] < pivot) {
                j--;
            }
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right, selector,ordem) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right,selector,ordem); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1,selector,ordem);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right,selector,ordem);
        }
    }
    return items;
}
export default quickSort;
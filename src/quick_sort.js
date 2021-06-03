function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right,selector) {
    var pivot   = items[Math.floor((right + left) / 2)][selector], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i][selector] > pivot) {
            i++;
        }
        while (items[j][selector] < pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right, selector) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right,selector); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1,selector);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right,selector);
        }
    }
    return items;
}
export default quickSort;
function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  var middle = Math.floor(array.length/2);
  var left = array.slice(0,middle);
  var right = array.slice(middle);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  var result = [];
  var lidx = 0;
  var ridx =0
  while(lidx < left.length && ridx < right.length){
    if(left[lidx] < right[ridx]){
      result.push(left[lidx]);
      lidx++;
    }else{
      result.push(right[ridx]);
      ridx++;
    }
  }
  return result.concat(left.slice(lidx)).concat(right.slice(ridx));
}

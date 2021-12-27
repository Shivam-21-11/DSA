function selectionSort(array) {
  for(var i =0;i<array.length;i++){
    var idx = i;
    for(var j =i+1 ; j< array.length;j++){
      if (array[i] > array[j]){
        idx = j;
      }
    }
    [array[i],array[idx]] = [array[idx],array[i]]
  }
  
}

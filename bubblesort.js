function bubbleSort(array,reverse = false) {
  for(var i =0;i<array.length;i++){
    for(var j = 0 ; j <array.length-1;j++){
      if(reverse){
        if(array[j] < array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]];
      }
      }else{
        if(array[j] > array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]];
      }
      }
      
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const node = new Node(value);
    if(this.length === 0){
      this.first = node;
      this.last = node;
    }else{
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue(){
    if(this.length === 0){
      console.log('Empty Queue');
      return;
    }else if(this.length === 1){
      this.first = null;
      this.last = null;
    }else{
    var hold = this.first.next;
    this.first.next = null;
    this.first = hold;
    }
    this.length--;
    return this;
  }
  
}

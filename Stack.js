class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(val){
    var node = new Node(val);
    if(this.length === 0){
      this.top = node;
      this.bottom = node;
    }else{
      var hold = this.top;
      this.top = node;
      node.next = hold;
    }
    this.length++;
    return this;
    
  }
  pop(){
    if(this.length === 0){
      console.log("Empty Stack");
    }else if(this.length === 1){
      this.top = null;
      this.bottom = null;
      this.length--;
      return this;
    }else{
      var hold = this.top.next;
      this.top.next = null;
      this.top = hold;
      this.length--;
      return this;
    }
    
  }
  peek(){
    return this.top;
  }
}

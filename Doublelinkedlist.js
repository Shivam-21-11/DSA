class Node{
  constructor(val){
    this.prev = null;
    this.value = val;
    this.next = null;
  }

}
class DoublelinkedList{
  constructor(val){
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;   
  }
  append(val){
    let newNode = new Node(val);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    
  }
  prepend(val){
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  insert(pos,val){
    if(pos > this.length ||  pos < 0){
      throw new RangeError(`The Value Must be in between 0 & ${this.length}`);

    }else if(pos === 0){
      this.prepend(val);
    }else if(pos === this.length){
      this.append(val);
    }else{
      let i =1 ;
      let curr = this.head;
      let aft = curr.next ;
      let newNode = new Node(val);
      while(i<pos){
        curr = curr.next;
        aft = curr.next;
        i++;
      }
      curr.next = newNode;
      newNode.prev = curr;
      newNode.next = aft;
      
    }
    this.length++;
  }
  print(){
    let root = this.head;
    var arr = [];
    while(root){
      arr.push(root.value);
      root = root.next;
    }
    return arr;
  }
  remove(pos){
    if(pos >= this.length ||  pos < 0){
      throw new RangeError(`The Value Must be in between 0 & ${this.length - 1}`);

    }else if(pos === 0){
        this.head = this.head.next;
    }else{
      let i = 1 ;
      let bef = this.head;
      let curr = bef.next;
      let nxt = curr.next;
      while(pos>i){
        bef = bef.next;
        curr = curr.next;
        nxt = curr.next;
        i++;
      }
      
      curr.next = null;
      curr.prev = null;
      bef.next = nxt;
      if(nxt){
        nxt.prev = bef;
      }
    }
    this.length--;
  }
  

}

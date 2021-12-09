class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
}
class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  insert(val){
    const newNode = new Node(val);
    if(this.root === null){
      this.root = newNode;
    }else{
      var root = this.root;
      while(true){
        if(val < root.val){
          if(!root.left){
            root.left = newNode;
            return this;
          }
          root = root.left;
        }else{
          if(!root.right){
            root.right = newNode;
            return this;
          }
          root = root.right; 
        }
      }
    }
  }
  lookup(value){
    var root = this.root;
    if(!root){
      return false;
    }
    while(root){
      if(root.val === value){
        return root;
      }
      if(value < root.val){
        root = root.left;
      }else if(value > root.val){
        root = root.right;
      }
    }
    return false;
  }
  remove(value){
    if(!this.root){
      return false;
    }
    var parent = null;
    var curr = this.root;
    while(curr){
      if(value < root.val){
        parent = root;
        curr = curr.left;
      }else if(value > root.val){
        parent = curr;
        curr = curr.right;
      }else if(curr.value === value){
        
        if(curr.right === null){
          if(parent === null){
            this.root = curr;
          }else{
            if(curr.val < parent.val){
              parent.left = curr.left;
            }else if(curr.val > parent.val){
              parent.right = curr.left;
            }
          }
        }
        
        else if(curr.right.left === null){
          if(parent === null){
            this.root = curr;
          }else {
            curr.right.left = curr.left
            if(curr.val < parent.val){
              parent.left = curr.left;
            }else if(curr.val > parent.val){
              parent.right = curr.left;
            }
          }
        }
        else{
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
           leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;
          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

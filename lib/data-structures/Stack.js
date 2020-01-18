import Node from './Node';

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.top) {
      const node = this.top;
      this.top = node.next;
      this.length -= 1;
      return node.val;
    }
    return null;
  }

  peek() {
    if (this.top) {
      return this.top.val;
    }
    return null;
  }

  isEmpty() {
    return (this.length === 0);
  }

  size() {
    return this.length;
  }

  toString() {
    const elements = [];
    let currentNode = this.top;
    while (currentNode) {
      elements.push(currentNode.val);
      console.log(currentNode.val)
      currentNode = currentNode.next;
    }
    elements.push('null');
    return elements.join("->");
  }
}

export default Stack;

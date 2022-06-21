class Stack {
  head = null;

  constructor(capacity) {
    this.size = 0;
    this.capacity = capacity;
  }

  push(value) {
    if (this.capacity === this.size) {
      throw new Error('Stack is Full!');
    }
    const node = {
      index: this.size,
      value,
      beforeNode: this.head,
    };
    this.head = node;
    this.size++;
  }

  pop() {
    if (!this.head) {
      throw new Error('Stack is Empty!');
    }
    const deletedValue = this.head.value;
    const node = this.head.beforeNode;
    this.head = node;
    this.size--;
    return deletedValue;
  }

  find(index) {
    if (!this.head) {
      throw new Error('Stack is Empty!');
    }
    if (index >= this.size) {
      throw new Error('Index is Over the Size of Stack!');
    }
    if (index < 0) {
      throw new Error('Index must Over the Zero!');
    }
    if (index === this.head.index) {
      return this.head.value;
    } else {
      let findNode = this.head.beforeNode;
      while (index !== findNode.index) {
        findNode = findNode.beforeNode;
      }
      return findNode.value;
    }
  }
}

module.exports = Stack;

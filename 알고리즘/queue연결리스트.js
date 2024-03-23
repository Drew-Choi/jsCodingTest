class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex += 1;
  }

  dequeue() {
    if (this.getLength() === 0) {
      return undefined;
    }
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex += 1;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const queue = new Queue();
queue.enqueue(5);
const a = queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(1);
queue.dequeue();
queue.dequeue();
queue.enqueue(3);

console.log(queue.items);
console.log(a);

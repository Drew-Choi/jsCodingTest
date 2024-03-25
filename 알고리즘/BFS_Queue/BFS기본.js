const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
const visited = Array(9).fill(false);

class Queue2 {
  constructor() {
    this.item = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.item[this.tailIndex] = item;
    this.tailIndex += 1;
  }

  dequeue() {
    if (this.getLength() === 0) {
      return undefined;
    }

    const item = this.item[this.headIndex];
    delete this.item[this.headIndex];
    this.headIndex += 1;
    return item;
  }

  peek() {
    return this.item[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const bfs = ({ graph, start, visited }) => {
  const queue = new Queue2();
  queue.enqueue(start);

  visited[start] = true;
  while (queue.getLength() != 0) {
    v = queue.dequeue();
    console.log(v);

    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
};

bfs({ graph, start: 1, visited });

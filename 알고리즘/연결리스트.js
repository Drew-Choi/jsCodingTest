const list = {
  head: {
    value: 90,
    next: {
      value: 10,
      next: {
        value: 89,
        next: {
          value: 100,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.currentNode = undefined;
    this.dataQuantity = 0;
  }

  length() {
    return this.dataQuantity;
  }

  append(data) {
    let newNode = new Node(data);

    this.tail.next = newNode;
    this.tail = newNode;
    this.dataQuantity += 1;
  }
}

i = new LinkedList();
i.append(1);
i.append(2);
i.append(3);
i.append(10);
i.append(20);
i.append(30);

console.log(i);

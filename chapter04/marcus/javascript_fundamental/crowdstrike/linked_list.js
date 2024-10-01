class Node {
  constructor(value)  {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse(k) {
    // create a new head point to null
    // Get the first item of original list
    // first item point to the new null node, then update the new node to first item

    let newHead = null;
    let newTail = null;
    let current = this.head;
    while (current && k > 0) {
      const next = current.next;
      current.next = newHead;
      if (newHead === null) {
        newTail = current;
      }
      newHead = current;
      current = next;
      k--;
    }

    this.head = newHead;
    if (current !== null) {
      newTail.next = current;
    }

    // 1 -> 2 -> 3 -> 4
    // 1 -> null, 2 -> 3 -> 4 (point newhead.next to current)
    // 2 -> 1 -> null, 3 -> 4
    // 3 -> 2 -> 1 -> null, 4
    // 4 -> 3 -> 2 -> 1 -> null
  }

  delete(value) {
    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      return;
    }
    while(current.next) {
      if (value === current.next.value) {
        current.next = current.next.next;
        break
      } else {
        current = current.next;
      }
    }
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let tempt = this.head;
      node.next = tempt;
      this.head = node;
    }
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  print() {
    let current = this.head;
    while(current) {
      console.log(`${current.value} -> `);
      current = current.next;
    }
  }
}

const l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.append(7);
l.reverse(1);
l.print();

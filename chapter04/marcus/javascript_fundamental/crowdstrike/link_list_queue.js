class Node{
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

    // think about reverse all first, then think about k
    reverse(k) {
        let prev = null
        let cur = this.head
        let newTail = this.head
        while (cur && k > 0) {
          const next = cur.next
          cur.next = prev
          prev = cur
          cur = next
          k--
        }
        if (cur !== null) {
          newTail.next = cur
        }
        this.head = prev
        // 3 -> 1 -> 2 -> null 
        // k = 3; 
        // Step 1: 
      }

    add(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
        } else {
            let cur = this.head
            while(cur.next) {
                cur = cur.next
            }
            cur.next = newNode
        }

    }

    append(val) {
        const newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
        } else {
            let tempt = this.head
            newNode.next = tempt
            this.head = newNode
        }
    }

    print() {
        let cur = this.head
        let result = ''
        while (cur) {
            result = `${result}${cur.val} -> `
            cur = cur.next
        }

        console.log(result);
    }
}
const l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.append(7);
l.add(8);
// l.reverse(1);
l.print();
l.reverse(2);
l.print();

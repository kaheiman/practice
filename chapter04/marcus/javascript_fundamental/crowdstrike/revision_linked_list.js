// Create Linkedlist
// support add, append, reverse, print

class Node {
    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
      this.tail = null
    }
    add(nodeVal) {
      const newNode = new Node(nodeVal)
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode
        this.tail = newNode
      }
    }
    append(nodeVal) {
      const newNode = new Node(nodeVal)
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head = newNode
      }    
    }
  
    reverse(numberOfItem) {
      // tempt new head and tail
      let prev = null
      let current = this.head
      let count = 0
      
      while (current && count < numberOfItem) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
        count++
      }
      this.head.next = current
      this.head = prev

      // traverse the first k node and using tempt head and tail for connection
      // connect the the tempt tail to the next
      // replace existing head node by tempt head node
    }
  
    print() {
      let current = this.head
      let result = []
      while (current !== null) {
        result.push(current.val)
        current = current.next
      }
      console.log(result.join('->'))
    }
  }
  
  
  const l = new LinkedList()
  l.add(5)
  l.add(6)
  l.add(7)
  l.add(8)
  l.add(9)
  l.reverse(4)
  l.print()
package lru

import "fmt"

type LinkedListNode struct {
	key  int
	data int
	next *LinkedListNode
	prev *LinkedListNode
}

type LinkedList struct {
	head *LinkedListNode
	tail *LinkedListNode
	size int
}

func (ll *LinkedList) InsertAtTail(key, data int) {
	newNode := LinkedListNode{key: key, data: data}
	if ll.tail == nil {
		ll.tail = &newNode
		ll.head = &newNode
		newNode.next = nil
	} else {
		ll.tail.next = &newNode
		newNode.next = nil
		newNode.prev = ll.tail
		ll.tail = &newNode

	}
	ll.size++
}

func (ll *LinkedList) RemoveNode(node *LinkedListNode) *LinkedListNode {
	if node == nil {
		return nil
	}
	if node.prev != nil {
		node.prev.next = node.next
	}
	if node.next != nil {
		node.next.prev = node.prev
	}
	if node == ll.head {
		ll.head = node.next
	}
	if node == ll.tail {
		ll.tail = node.prev
	}
	ll.size--
	return node
}

func (ll *LinkedList) GetHead() *LinkedListNode {
	return ll.head
}

func (ll *LinkedList) GetTail() *LinkedListNode {
	return ll.tail
}

type LRUCache struct {
	Capacity  int
	CacheVals LinkedList
	Cache     map[int]*LinkedListNode
}

func (lr *LRUCache) Get(key int) *LinkedListNode {
	if v, ok := lr.Cache[key]; ok {
		data := v.data
		lr.CacheVals.RemoveNode(v)
		lr.CacheVals.InsertAtTail(key, data)
		return v
	}
	return nil
}

func (lr *LRUCache) Set(key, val int) {
	if _, ok := lr.Cache[key]; !ok {
		if lr.CacheVals.size >= lr.Capacity {
			// 	remove the head and add into tail
			lr.CacheVals.InsertAtTail(key, val)
			lr.Cache[key] = lr.CacheVals.tail
			delete(lr.Cache, lr.CacheVals.head.key)
			lr.CacheVals.RemoveNode(lr.CacheVals.head)
		} else {
			lr.CacheVals.InsertAtTail(key, val)
			lr.Cache[key] = lr.CacheVals.GetTail()
		}
	} else {
		lr.CacheVals.RemoveNode(lr.Cache[key])
		lr.CacheVals.InsertAtTail(key, val)
		lr.Cache[key] = lr.CacheVals.tail
	}
}

func (lr *LRUCache) Print() {
	curr := lr.CacheVals.head
	for curr != nil {
		fmt.Printf("(%v,%v)", curr.key, curr.data)
		curr = curr.next
	}
	fmt.Println("")
}

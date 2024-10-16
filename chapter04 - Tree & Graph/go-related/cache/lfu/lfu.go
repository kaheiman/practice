package lfu

type LinkedListNode struct {
	key  string
	val  int
	next *LinkedListNode
	prev *LinkedListNode
	freq int
}

// type LinkedList struct{
// 	head *LinkedListNode
// 	tail *LinkedListNode
// }

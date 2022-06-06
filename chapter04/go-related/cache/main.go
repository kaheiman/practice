package main

import (
	"fmt"
	"marcus/lru/lru"
)

func main() {
	fmt.Printf("========= LRU (Least Recently Use) Cache Most recently watch title ==========\n")
	cache := &lru.LRUCache{Capacity: 3, Cache: make(map[int]*lru.LinkedListNode)}
	cache.Set(10, 20)
	cache.Set(8, 30)
	cache.Set(9, 40)
	cache.Set(11, 40)
	cache.Set(8, 31)
	fmt.Printf("Get: %v \n", cache.Get(11))
	cache.Get(8)
	cache.Print()

	fmt.Printf("========= LFU (Least Frequently Use) Cache Most frequently watch title ==========\n")

}

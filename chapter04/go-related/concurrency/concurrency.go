package main

import (
	"fmt"
	"sync"
	"sync/atomic"
)

func print_cat(wg *sync.WaitGroup, catCh chan int, fishCh chan int, counter uint64) {
	for {
		if counter >= uint64(3) {
			wg.Done()
		}
		<-catCh
		fmt.Println("print cat")
		atomic.AddUint64(&counter, 1)
		fishCh <- 1
	}
}

func print_dog(wg *sync.WaitGroup, dogCh chan int, catCh chan int, counter uint64) {
	for {
		if counter >= uint64(3) {
			wg.Done()
		}
		<-dogCh
		fmt.Println("print dog")
		atomic.AddUint64(&counter, 1)
		catCh <- 1
	}
}

func print_fish(wg *sync.WaitGroup, fishCh chan int, dogCh chan int, counter uint64) {
	for {
		if counter >= uint64(3) {
			wg.Done()
		}
		<-fishCh
		fmt.Println("print fish")
		atomic.AddUint64(&counter, 1)
		dogCh <- 1
	}
}

func main() {

	var wg sync.WaitGroup
	wg.Add(3)
	var dogCounter uint64
	var catCounter uint64
	var fishCounter uint64

	dogCh := make(chan int, 1)
	fishCh := make(chan int, 1)
	catCh := make(chan int, 1)

	dogCh <- 1
	go print_dog(&wg, dogCh, catCh, dogCounter)
	go print_cat(&wg, catCh, fishCh, catCounter)
	go print_fish(&wg, fishCh, dogCh, fishCounter)

	wg.Wait()
}

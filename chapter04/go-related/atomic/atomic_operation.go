package atomic

import (
	"fmt"
	"sync"
	"sync/atomic"
)

func atomicAdd(wg *sync.WaitGroup, sum *uint32) {
	for i := 0; i < 3000; i++ {
		atomic.AddUint32(sum, 1)
	}
	wg.Done()
}

func atomicReduce(wg *sync.WaitGroup, sum *int32) {
	for i := 0; i < 3000; i++ {
		atomic.AddInt32(sum, -1)
	}
	wg.Done()
}

func atomicCompareAndSwap() {
	var (
		sum int32 = 3
	)
	atomic.SwapInt32(&sum, 4)
	swap := atomic.CompareAndSwapInt32(&sum, 5, 100)
	if swap {
		fmt.Printf("swap successfully %+v", sum)
	}
}

func mutexAdd(wg *sync.WaitGroup, sum *uint32, m *sync.Mutex) {
	for i := 0; i < 3000; i++ {
		m.Lock()
		*sum++
		m.Unlock()
	}
	wg.Done()
}

func atomicFlow() {
	var wg sync.WaitGroup
	var sum uint32 = 3
	wg.Add(3)
	go atomicAdd(&wg, &sum)
	go atomicAdd(&wg, &sum)
	go atomicAdd(&wg, &sum)
	wg.Wait()
}

func mutexFlow() {
	var wg sync.WaitGroup
	var sum uint32 = 3
	var m sync.Mutex
	wg.Add(3)
	go mutexAdd(&wg, &sum, &m)
	go mutexAdd(&wg, &sum, &m)
	go mutexAdd(&wg, &sum, &m)
	wg.Wait()
}

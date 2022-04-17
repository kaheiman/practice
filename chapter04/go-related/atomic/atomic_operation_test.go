package atomic

import "testing"

// It may be confusing that mutexes are very similar to atomic operations but they are much more complicated than that.
// Atomics utilize CPU instructions whereas mutexes utilize the locking mechanism. So when updating shared variables like integers, atomics are faster. But the real power of mutexes comes when the complex structure of data is handled concurrently.
// Then it is the only option since atomics don’t support that.

func BenchmarkAtomicFlow(b *testing.B) {
	for n := 0; n < b.N; n++ {
		atomicFlow()
	}
}

func BenchmarkMutexFlow(b *testing.B) {
	for n := 0; n < b.N; n++ {
		mutexFlow()
	}
}

func TestMutexFlow(t *testing.T) {
	mutexFlow()
}

func TestAtomicCompareAndSwap(t *testing.T) {
	atomicCompareAndSwap()
}

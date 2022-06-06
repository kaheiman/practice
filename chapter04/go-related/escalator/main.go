package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"
)

type EscalatorState string

const (
	EscalatorStateSTOP   EscalatorState = "STOP"
	EscalatorStateOCUPPY EscalatorState = "OCUPPY"
	EscalatorStateIDLE   EscalatorState = "IDLE"
)

type Direction string

const (
	DirectionUp   Direction = "UP"
	DirectionDown Direction = "Down"
)

type Escalator struct {
	ID            int
	CurrentFloor  int
	State         EscalatorState
	Direction     Direction
	InternalQueue []InternalEvent
}

func (w *Escalator) work(c *Coordinator, event ExternalEvent) {
	fmt.Printf("Escalator id : %d - %+v \n", w.ID, event)
	w.State = EscalatorStateOCUPPY
	w.Direction = DirectionUp
	if w.CurrentFloor >= event.SourceFloor {
		w.Direction = DirectionDown
	}
	time.Sleep(2 * time.Second)
	w.CurrentFloor = event.SourceFloor
	c.IDLEWorkerPool = append(c.IDLEWorkerPool, *w)
	fmt.Printf("Escalator status : %+v\n", w)
}

type InternalEvent struct {
	DestinationFloor int
}

type ExternalEvent struct {
	ID          int
	Direction   Direction
	SourceFloor int
}

type Coordinator struct {
	ExternalEventQueue []ExternalEvent
	IDLEWorkerPool     []Escalator
	JobQueue           chan ExternalEvent
}

func (c *Coordinator) addExternalEvent(events ...ExternalEvent) {
	c.ExternalEventQueue = append(c.ExternalEventQueue, events...)
}

func (c *Coordinator) start() {
	go delegateJobs(c)
	go listenJobs(c)
}

func delegateJobs(c *Coordinator) {
	for range time.Tick(time.Second * 1) {
		fmt.Printf("==== DelegateJobs ==== \n")
		count := 0
		for len(c.ExternalEventQueue) > 0 {
			currEvent := c.ExternalEventQueue[0]
			currEvent.ID = int(time.Now().Unix() + int64(count)) // epoch time
			count++
			fmt.Printf("trigger external event queue: %d %+v\n", time.Now().Unix(), currEvent)
			c.ExternalEventQueue = c.ExternalEventQueue[1:]
			c.JobQueue <- currEvent
			fmt.Printf("Send \n")
		}
	}
}

func listenJobs(c *Coordinator) {
	for {
		if len(c.IDLEWorkerPool) == 0 {
			continue
		}
		job := <-c.JobQueue
		escalator := c.IDLEWorkerPool[0]
		c.IDLEWorkerPool = c.IDLEWorkerPool[1:]
		go escalator.work(c, job)
	}
}

func main() {
	escOne := Escalator{1, 1, EscalatorStateIDLE, DirectionUp, []InternalEvent{}}
	escTwo := Escalator{2, 1, EscalatorStateIDLE, DirectionUp, []InternalEvent{}}
	co := Coordinator{IDLEWorkerPool: []Escalator{escOne, escTwo}, JobQueue: make(chan ExternalEvent)}
	co.start()

	// assumption: Only 10 floors from 1 to 10
	// assumption: Internal events has a higher priority than external event
	co.addExternalEvent(
		ExternalEvent{Direction: DirectionUp, SourceFloor: 9},
		ExternalEvent{Direction: DirectionUp, SourceFloor: 2},
		ExternalEvent{Direction: DirectionUp, SourceFloor: 4},
		ExternalEvent{Direction: DirectionUp, SourceFloor: 7},
	)

	for range time.Tick(time.Second * 1) {
		co.addExternalEvent(
			ExternalEvent{Direction: DirectionUp, SourceFloor: 9},
		)
	}

	stopChan := make(chan os.Signal, 1)
	signal.Notify(stopChan, syscall.SIGINT, syscall.SIGTERM)
	<-stopChan
	fmt.Printf("\nshutting down server...")
}

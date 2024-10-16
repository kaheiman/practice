package main

import (
	"bytes"
	"fmt"
	"io"
	"os"
)

// value type: float, int, string, array, struct, bool
// reference type: pointer, chan, slice, func, interface,

// error
// errors.Is()
// errors.As()
// errors.Unwrap() with %w

var i int            // default 0
var s string         // default empty string
var b bool           // default false
var n *int           // default nil
var c chan int       // default nil
var sSlice []string  // default empty slice
var sArray [4]string // default array , cannot append
var o map[string]int // default nil

type client interface {
	play()
} // default nil

type Name struct {
	gender string
}

var name *Name // default nil -> stores a reference

var iClient client // default nil

func takeReader(b io.Writer) {}
func hahaha() (result int64, err error) {
	return 2, nil
}
func takeReaders(b, a string) (val int64, err error) {
	val, err = hahaha()
	return
}

type User struct {
	name string
	role int
}

func makeAdmin(u User) {
	u.role = 1
}

func hasAccess(u *User) bool {
	return u.role == 1
}

func CopyFile(dstName, srcName string) (written int64, err error) {
	src, err := os.Open(srcName)
	defer src.Close()
	if err != nil {
		return
	}
	dst, err := os.Open(dstName)
	defer dst.Close()
	if err != nil {
		return
	}
	written, err = io.Copy(dst, src)
	return
}

func update2dArray(friends [][]bool) {
	friends[0][0] = false
}

func main() {
	mySlice := map[string]string{"a": "123", "b": "456", "c": "789"}
	mySlice["a"] = "999999"
	fmt.Printf("mySlicc %s \n", mySlice)
	myCopySlice := make(map[string]*string)

	for key, val := range mySlice {
		address := val
		myCopySlice[key] = &address
	}

	for key, val := range myCopySlice {
		fmt.Printf("myCopySlice %s %+v \n", key, *val)
	}

	u := &User{
		name: "asa",
	}

	twoDArr := [][]bool{{true, false, true}}
	update2dArray(twoDArr)
	// 2d array will update reference
	fmt.Printf("twoDArrPtr %+v\n", twoDArr)

	makeAdmin(*u)
	access := hasAccess(u)
	fmt.Printf("access: %+v \n", access)
	var b bytes.Buffer
	takeReader(&b)
	fmt.Println(takeReaders("123", "466"))
	// var s1 = []string{"1"}
	// var s2 = []string{"1"}
	// cannot compare map, slice, in golang, use reflect.DeepEqual
	// if (s1 == s2) {	}
	m := make(map[string]int)
	k, v := m["test"]
	fmt.Printf("%+v %+v", k, v)

	birds := []string{"aaa", "bbb"}
	dogs := []string{"ddd", "eee", "ffff"}
	var animals []string
	animals = birds
	animals = append(animals, dogs[:1]...)
	birds[1] = "ppkpk"
	fmt.Printf("%+v", animals)

	s1 := []int{1, 2, 3}
	s2 := []int{4, 5}
	s1 = append(s1, s2...) // join 2 slice
	fmt.Println(s1)

	const cl = 100
	var bl = 123
	println(&bl, bl)
	// println(&cl, cl) // cannot take the address of cl 常量 常量不同于变量的在运行期分配内存，常量通常会被编译器在预处理阶段直接展开

	fmt.Printf("test %d %s %+v %+v %+v %+v %+v %+v %+v %+v", i, s, b, name, n, c, sSlice, iClient, o, len(sArray))
	// manage slice
	sSlice = append(sSlice, "a", "b", "c", "d", "e", "f")
	fmt.Printf("%+v", sSlice[0:4]) // error no capacity

	newName := new(Name) // func new(Type) *Type -> always return ptr , not usually do it in this way
	fmt.Printf("newName: %+v %+v", newName, Name{})

	fmt.Printf("============ Slice\n")
	// new vs make -> make (slice, channel, map) and return the original type
	sliceExperiment()

	fmt.Printf("========= Defer | defer stack \n")
	deferTestOne()

	fmt.Printf("========= Defer | return or defer first \n")
	returnAndDefer()

	fmt.Printf("========= Defer | return but defer \n")
	fmt.Println(returnButDefer())

	fmt.Printf("========= Defer | defer meets panic \n")
	defer_call()
	fmt.Println("main 正常结束")

	fmt.Printf("========= Defer | defer中包含panic \n")
	panic_in_defer() // the defer one will cover the original panic one

	fmt.Printf("========= Defer | with function \n")
	defer_with_function()

	fmt.Printf("========= Defer exercis \n")
	defer_exercise()

	fmt.Printf("map[string]Student vs map[string]*Student")
	type Student struct {
		Name string
	}

	var list map[string]Student
	list = make(map[string]Student)

	student := Student{"Aceld"}

	list["student"] = student
	// list["student"].Name = "LDB" // cannot update the name because it return a reference, and reference is read only

	var list2 map[string]*Student
	list2 = make(map[string]*Student) // it return the student value pointer point to student

	student2 := Student{"Aceld"}

	list2["student"] = &student2
	list2["student"].Name = "LDB"

	fmt.Println(list2["student"])

	fmt.Println(list["student"])

	fmt.Printf("============== iterate through slice / array\n")
	sliceTraverse1()

	fmt.Printf("============== iterate through slice / array correct version\n")
	sliceTraverse2()

}

type student struct {
	Name string
	Age  int
}

func sliceTraverse1() {
	//定义map
	m := make(map[string]*student)

	//定义student数组
	stus := []student{
		{Name: "zhou", Age: 24},
		{Name: "li", Age: 23},
		{Name: "wang", Age: 22},
	}

	//将数组依次添加到map中
	for _, stu := range stus {
		m[stu.Name] = &stu
	}

	//打印map
	for k, v := range m {
		fmt.Println(k, "=>", v.Name)
	}
}
func sliceTraverse2() {
	m := make(map[string]*student)

	//定义student数组
	stus := []student{
		{Name: "zhou", Age: 24},
		{Name: "li", Age: 23},
		{Name: "wang", Age: 22},
	}

	// 遍历结构体数组，依次赋值给map
	for i := 0; i < len(stus); i++ {
		m[stus[i].Name] = &stus[i]
	}

	//打印map
	for k, v := range m {
		fmt.Println(k, "=>", v.Name)
	}
}

func DeferFunc1(i int) (t int) {
	t = i
	defer func() {
		t += 3
	}()
	return t
}

func DeferFunc2(i int) int {
	t := i
	defer func() {
		t += 3
	}()
	return t
}

func DeferFunc3(i int) (t int) {
	defer func() {
		t += i
	}()
	return 2
}

func DeferFunc4() (t int) {
	defer func(i int) {
		fmt.Println(i)
		fmt.Println(t)
	}(t)
	t = 1
	return 2
}

func defer_exercise() {
	fmt.Println(DeferFunc1(1))
	fmt.Println(DeferFunc2(1))
	fmt.Println(DeferFunc3(1))
	DeferFunc4()
}

func function(index int, value int) int {

	fmt.Println(index)

	return index
}

func defer_with_function() {
	defer function(1, function(3, 0))
	defer function(2, function(4, 0))
}

func panic_in_defer() {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println(err)
		} else {
			fmt.Println("fatal")
		}
	}()

	defer func() {
		panic("defer panic")
	}()

	panic("panic")
}

func defer_call() {
	defer func() {
		fmt.Println("defer: panic 之前1, 捕获异常")
		if err := recover(); err != nil {
			fmt.Println(err)
		}
	}()

	defer func() { fmt.Println("defer: panic 之前2, 不捕获") }()

	panic("异常内容") //触发defer出栈

	defer func() { fmt.Println("defer: panic 之后, 永远执行不到") }()
}

func returnButDefer() (t int) { //t初始化0， 并且作用域为该函数全域

	defer func() {
		t = t * 10
	}()

	return 1
}

func deferTestOne() {
	defer func1()
	defer func2()
	defer func3()
}

func deferFunc() int {
	fmt.Println("defer func called")
	return 0
}

func returnFunc() int {
	fmt.Println("return func called")
	return 0
}

func returnAndDefer() int {

	defer deferFunc()

	return returnFunc()
}

func func1() {
	fmt.Println("A")
}

func func2() {
	fmt.Println("B")
}

func func3() {
	fmt.Println("C")
}

func sliceExperiment() {
	a := make([]int, 5)          // allocate capacity 5, length 5 filled will default value 0
	a = append(a, 1, 23, 456, 7) // capacity = 10
	fmt.Printf("@@%+v@@", a)
	printSlice("a", a)

	b := make([]int, 0, 5) // capacity = 5; length = 0, empty array, cannot do b[0]
	b = append(b, 1)
	fmt.Printf("@@%+v@@", b)

	printSlice("b", b)

	c := b[:2] // shallow copy the reference with capcity equal to b and length 2 filled by default
	c[0] = 7
	fmt.Printf("@@ b: %+v@@", b)
	printSlice("c", c)
	fmt.Printf("@@%+v@@", c)

	d := c[2:5]
	printSlice("d", d)
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}

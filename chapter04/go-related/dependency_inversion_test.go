// You can edit this code!
// Click here and start typing.
package main

import (
	"encoding/json"
	"os"
	"reflect"
	"testing"
)

func TestNewPaypalClient(t *testing.T) {
	tests := []struct {
		name string
		want PaymentClient
	}{
		// TODO: Add test cases.
		{name: "aaaa", want: &PaypalClient{secret: 10}},
	}

	type School struct {
		Id   interface{}
		Name string
	}
	x := School{
		Id:   1,
		Name: "Golang Public School",
	}
	bytes, err := json.Marshal(x)
	if err != nil {
		println("error while unmarshalling the json ", err)
		os.Exit(1)
	}
	var y School
	err = json.Unmarshal(bytes, &y)
	if err != nil {
		println("error while unmarshalling the json ", err)
		os.Exit(1)
	}
	if reflect.DeepEqual(x, y) {
		println("both x & y are same")
	} else {
		println("x & y are different")
	}
	// DeepEqual is used to check
	// two interfaces are equal or not
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := NewPaypalClient(); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("NewPaypalClient() = %v, want %v", got, tt.want)
			}
		})
	}
}

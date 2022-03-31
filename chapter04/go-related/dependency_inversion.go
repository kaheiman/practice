// You can edit this code!
// Click here and start typing.
package main

import "fmt"

type PaymentClient interface {
	Authorize()
	Capture()
	Void()
	Refund()
}

type StripeClient struct {
	resources int
}

type PaypalClient struct {
	secret int
}

func NewStripeClient() PaymentClient {
	return &StripeClient{
		resources: 1,
	}
}

func NewPaypalClient() PaymentClient {
	return &PaypalClient{
		secret: 10,
	}
}

func Create() {
	stripeClient, _ := NewStripeClient().(*StripeClient)
	paypalClient, _ := NewPaypalClient().(*PaypalClient)

	stripeClient.CreateOrder()
	paypalClient.Halo()
}

func (client *StripeClient) Authorize() {}
func (client *StripeClient) Capture()   {}
func (client *StripeClient) Void()      {}
func (client *StripeClient) Refund()    {}
func (client *StripeClient) CreateOrder() {
	fmt.Println("stripe client create order")
}

func (client *PaypalClient) Authorize() {}
func (client *PaypalClient) Capture()   {}
func (client *PaypalClient) Void()      {}
func (client *PaypalClient) Refund()    {}
func (client *PaypalClient) Halo() {
	fmt.Println("paypal client halo")
}

func main() {
	Create()
}

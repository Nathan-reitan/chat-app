import React from 'react';
// import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chat App'
    };
  }

  // componentDidMount() {
  //   this.getCartItems();
  // }

  // setView(name, params) {
  //   return this.setState(state => ({
  //     view: {
  //       name: name,
  //       params: params
  //     }
  //   }));
  // }

  // getCartItems() {
  //   fetch('/api/cart')
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.length === 0) {
  //         return this.setState(() => ({
  //           cart: []
  //         }));
  //       }
  //       return this.setState(() => ({
  //         cart: [data]
  //       }));
  //     });
  // }

  // addCartItem(product) {
  //   const oldCart = this.state.cart.slice();
  //   fetch('/api/cart', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ productId: product })
  //   })
  //     .then(response => response.json())
  //     .then(newCartItem => {
  //       oldCart.push(newCartItem);
  //       return this.setState(() => ({
  //         cart: oldCart
  //       }));
  //     });
  // }

  // placeOrder(info) {
  //   fetch('/api/orders', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: info.name,
  //       creditCard: info.creditCard,
  //       shippingAddress: info.shippingAddress
  //     })
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       return this.setState(() => ({
  //         cart: [],
  //         view: {
  //           name: 'catalog',
  //           params: {}
  //         }
  //       }));
  //     });
  // }

  render() {
    return (
      <div>
        <div className="text-light text-center"><h1>Disclaimer: This site is for demonstrative purposes only, DO NOT ENTER REAL INFORMATION INTO THE FORM ON THE CHECKOUT PAGE.</h1></div>
      </div>

    );
  }
}

import React from 'react';
import Header from './header';
import Container from './container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Chat App',
      messages: []
    };
  }

  componentDidMount() {
    this.getMessages();
  }

  // setView(name, params) {
  //   return this.setState(state => ({
  //     view: {
  //       name: name,
  //       params: params
  //     }
  //   }));
  // }

  getMessages() {
    fetch('/api/messages')
      .then(response => response.json())
      .then(data => {
        // if (data.length === 0) {
        //   return this.setState(() => ({
        //     messages: []
        //   }));
        // }
        return this.setState(() => ({
          messages: data
        }));
      });
  }

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
        <Header />
        <div className='container vh-100'>
          <div className="text-light text-center">
            <h1>
            Welcome to the Reitan Chat App!
            </h1>
          </div>
          <Container messages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

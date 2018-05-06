import React, { Component } from 'react'
import './App.css'
import List from './containers/List'
import Clock from 'react-live-clock'
import CheckOutButton from './components/CheckOutButton'


const products = [
  {
    id: 1,
    name: "Surf Board",
    price: 720,
    quantity: 0
  },
  {
    id: 2,
    name: "Wetsuit",
    price: 220,
    quantity: 0

  },
  {
    id: 3,
    name: "T-shirt",
    price: 15,
    quantity: 0
  }
]

class App extends Component {

  state = {
    products,
    total: 'Total price: 0'
  }

  incrementQuantity = (productId, updates) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id !== productId) return product
        return { ...product, ...updates}
      })
    })
  }

  totalValue = () => {
    const totalEuros = this.state.products
      .map(product => product.price * product.quantity)
      .reduce((a,b) => a+b)
    this.setState({
      total: `Total price: ${totalEuros}`
    })
  }

  render() {

    return (
      <div className="App">
        <h1>The Surf Store</h1>
        <h2><Clock format={'dddd, MMMM Mo, h:mm:ss A'} ticking={true} timezone={'Europe/Amsterdam'} /></h2>
        <List
          products={this.state.products}
          incrementQuantity={this.incrementQuantity}
        />
        <h2><CheckOutButton onClick={this.totalValue} /></h2>
        <h2>{this.state.total} euros</h2>
      </div>
    );
  }
}

export default App;

import React, { PureComponent } from 'react'
import CartItem, { productShape } from '../components/CartItem'
import PropTypes from 'prop-types'


export default class List extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(productShape).isRequired,
    incrementQuantity: PropTypes.func.isRequired
  }

  render() {
    const { products, incrementQuantity } = this.props

    return (
      <div>
        <ul className="Board">
          {products
            .map((product, index) => (
              <CartItem
                key={index}
                onChange={incrementQuantity}
                { ...product }
              />
            ))}
        </ul>
      </div>
    )
  }
}

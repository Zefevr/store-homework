import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'


export const productShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
})

export default class CartItem extends PureComponent {
  static propTypes = {
    ...productShape.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onPlusClick = () => {
    const { id, quantity, onChange } = this.props
    onChange(id, { quantity: quantity + 1 })
  }

  render() {
    const { name, price, quantity} = this.props

    return (
      <li>
        {name} Price: {price} Quantity: {quantity}<PlusOneButton onClick={this.onPlusClick} name="+" />
      </li>
    )
  }
}

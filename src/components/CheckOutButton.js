import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './CheckOutButton.css'

export default class CheckOutButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="Total" onClick={this.props.onClick}>Checkout</button>
    )
  }
}

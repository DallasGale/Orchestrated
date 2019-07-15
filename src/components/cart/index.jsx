import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../styled/layout'
import { TypographyHeading3, TypographyHeading4 } from '../styles/typography'
import { StyledCart, StyledLineItem, StyledUnits } from './styled'

const cartTitle = 'Your Cart'
const amountLabel = 'Amount'
const totalLabel = 'TOTAL:'

const Cart = (props) => {
  const { cart, totalCost } = props

  return (
    <StyledCart>
      <Layout>
        <TypographyHeading3>{cartTitle}</TypographyHeading3>
      </Layout>
      {
        cart.map((item) => {
          if (item.units > 0) {
            return (
              <StyledLineItem key={item.title}>
                <div>
                  <div className="utils__padding-l--20">{item.title}</div>
                </div>
                <small className="typography__align--right">{amountLabel}</small>
                <StyledUnits className="typography__align--center">{item.units}</StyledUnits>
                <div className="typography__align--right">
                  <div className="utils__padding-r--20">{`$${item.price}`}</div>
                </div>
              </StyledLineItem>
            )
          }
          return null
        })
      }
      <Layout>
        <TypographyHeading4 className="typography__align--right">{`${totalLabel} $${totalCost}`}</TypographyHeading4>
      </Layout>
    </StyledCart>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.any).isRequired,
  totalCost: PropTypes.number,
}

Cart.defaultProps = {
  totalCost: 0,
}

export default Cart

import React from 'react'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'

import { Card } from '../styled/card'
import Layout from '../styled/layout'
import { TypographyHeading3, TypographyHeading4 } from '../styles/typography'
import { pageLoadContentAppear } from '../utils/transitions'


const StyledCart = styled.div`
  background: ${colors.white};
  margin: 0 auto;
  max-width: ${pxToEm(1060)};
  ${Card};
  opacity: 0;
  animation: ${pageLoadContentAppear} 0.5s ease forwards;
`

const StyledLineItem = styled.div`
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
  border-top: 1px solid ${colors.lightGray};
  display: grid;
  font-size: ${pxToEm(13)};
  grid-template-columns: 60% 20% 10% 5% 5%;
  padding-bottom: ${pxToEm(15)};
  padding-top: ${pxToEm(15)};
  width: 100%;
`

const StyledUnits = styled.small`
  border: 1px solid ${colors.lightGray};
  border-radius: 5px;
  padding: ${pxToEm(5)} ${pxToEm(0)};
  margin-left: ${pxToEm(10)};
  width: 30px;
`

const Cart = (props) => {
  const { cart, totalCost } = props

  return (
    <StyledCart>
      <Layout>
        <TypographyHeading3>Your Cart</TypographyHeading3>
      </Layout>
      {
        cart.map((item) => {
          console.log(item)
          if (item.units > 0) {
            return (
              <StyledLineItem key={item.title}>
                <div>
                  <div className="utils__padding-l--20">{item.title}</div>
                </div>
                {/* <small className="typography__align--right">
                  <button type="button" onClick={removeFromCart}>Remove from cart</button>
                </small> */}
                <small className="typography__align--right">Amount</small>
                <StyledUnits className="typography__align--center">{item.units}</StyledUnits>
                <div className="typography__align--right">
                  <div className="utils__padding-r--20">{`$${item.price}`}</div>
                </div>
              </StyledLineItem>
            )
          }
        })
      }
      <Layout>
        <TypographyHeading4 className="typography__align--right">{`TOTAL: $${totalCost}`}</TypographyHeading4>
      </Layout>
    </StyledCart>
  )
}

export default Cart

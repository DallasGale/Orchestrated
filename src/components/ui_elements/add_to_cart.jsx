import React from 'react'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { typographyWeightBold } from '../styles/typography'
import { simpleHover } from '../styles/transitions'

const StyledAddToCart = styled.button`
  background: ${colors.navy};
  border: 0;
  border-radius: ${pxToEm(4)};
  color: white;
  cursor: pointer;
  font-size: ${pxToEm(12)};
  padding: ${pxToEm(6)} ${pxToEm(20)} ${pxToEm(8)} ;
  width: auto;
  &:hover {
    background: ${colors.white};
    color: ${colors.navy};
  }
  ${simpleHover};
  ${typographyWeightBold};
`

const AddToCart = (props) => {
  const { addToCartClick } = props
  const label = 'Add to cart'
  return <StyledAddToCart type="button" onClick={addToCartClick}>{label}</StyledAddToCart>
}

export default AddToCart

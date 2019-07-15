import React from 'react'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { typographyWeightBold } from '../styles/typography'

const StyledRemoveFromCart = styled.button`
  background: ${colors.lightGray};
  border: 0;
  border-radius: ${pxToEm(4)};
  color: ${colors.navy};
  cursor: pointer;
  font-size: ${pxToEm(12)};
  padding: ${pxToEm(6)} ${pxToEm(20)} ${pxToEm(8)} ;
  width: auto;
  ${typographyWeightBold};
`

const RemoveFromCart = (props) => {
  const { removeOnClick } = props
  const label = 'Remove from cart'
  return <StyledRemoveFromCart type="button" onClick={removeOnClick}>{label}</StyledRemoveFromCart>
}

export default RemoveFromCart

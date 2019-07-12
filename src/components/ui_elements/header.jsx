import React from 'react'
import styled from 'styled-components'

import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'

const StyledHeader = styled.header`
  background: ${colors.blueGray};
  color: ${colors.white};
  height: ${pxToEm(70)};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Header = (props) => {
  const { cart, title } = props
  return (
    <StyledHeader>
      {title}
      {cart}
    </StyledHeader>
  )
}

export default Header

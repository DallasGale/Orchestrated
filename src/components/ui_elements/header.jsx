import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Layout from '../styled/layout'
import { typographyWeightBold, TypographyHeading1 } from '../styles/typography'
import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'


const StyledHeader = styled.header`
  background: ${colors.blueGray};
  color: ${colors.white};
  height: auto;
  left: 0;
  padding: 5px 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
`

const StyledGrid = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 50% 50%;
`

const StyledFa = styled(FontAwesomeIcon)`
  font-size: ${pxToEm(20)};
`

const StyledCount = styled.div`
  align-items: center;
  background: ${colors.red};
  border-radius: ${pxToEm(26)};
  font-size: ${pxToEm(9)};
  display: flex;
  height: ${pxToEm(28)};
  width: ${pxToEm(28)};
  justify-content: center;
  top: ${pxToEm(16)};
  right: ${pxToEm(35)};
  position: absolute;
  ${typographyWeightBold};
`

const Header = (props) => {
  const { cart, countExists, title } = props
  return (
    <StyledHeader>
      <StyledGrid>
        <div>
          <TypographyHeading1>{title}</TypographyHeading1>
        </div>
        <div className="typography__align--right">
          <div className="header__cart">
            <StyledFa icon={faShoppingCart} />
            {countExists && (<StyledCount>{cart}</StyledCount>)}
          </div>
        </div>
      </StyledGrid>
    </StyledHeader>
  )
}

export default Header

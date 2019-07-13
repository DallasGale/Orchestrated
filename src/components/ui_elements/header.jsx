import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Layout from '../styled/layout'
import { TypographyHeading1 } from '../styles/typography'
import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'


const StyledHeader = styled.header`
  background: ${colors.blueGray};
  color: ${colors.white};
  height: auto;
  left: 0;
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
  font-size: ${pxToEm(30)};
`

const Header = (props) => {
  const { cart, title } = props
  return (
    <StyledHeader>
      <Layout>
        <StyledGrid>
          <div>
            <TypographyHeading1>{title}</TypographyHeading1>
          </div>
          <div className="typography__align--right">
            <StyledFa icon={faShoppingCart} />
            {cart}
          </div>
        </StyledGrid>
      </Layout>
    </StyledHeader>
  )
}

export default Header

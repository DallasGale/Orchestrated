import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { TypographyHeading1 } from '../../styles/typography'
import {
  StyledCount,
  StyledFa,
  StyledGrid,
  StyledHeader,
} from './styled'

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

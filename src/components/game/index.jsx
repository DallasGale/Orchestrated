import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { typographyWeightBold, TypographyHeading2 } from '../styles/typography'

import AddToCart from '../ui_elements/add_to_cart'
import OnSaleBanner from '../ui_elements/on_sale_banner'
import Layout from '../styled/layout'
import Divider from '../ui_elements/divider'


const HeroImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: ${pxToEm(182)};
  position: relative;
`

const StyledCard = styled.article`
  background: ${colors.white};
  border-radius: ${pxToEm(8)};
  box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.1);
  overflow: hidden;
`

const StyledPrice = styled.div`
  font-size: ${pxToEm(18)};
  ${typographyWeightBold};
`

const StyledTwoCol = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledDescription = styled.div`
  height: ${pxToEm(100)};
`

const Game = (props) => {
  const {
    description,
    hero,
    sale,
    price,
    save,
    title,
    was,
  } = props
  return (
    <StyledCard>
      <HeroImage style={{ backgroundImage: `url('${hero}')` }}>
        {sale && <OnSaleBanner />}
      </HeroImage>

      <Layout>
        <StyledDescription>
          <TypographyHeading2>{title}</TypographyHeading2>
          <p>{description}</p>
        </StyledDescription>
      </Layout>
      <Divider />
      <Layout>
        <StyledTwoCol>
          <StyledPrice>{`$${price}`}</StyledPrice>
          <small className="typography__align--right">{`Was ${was}, save ${save}`}</small>
        </StyledTwoCol>
        <StyledTwoCol>
          <div>
            <AddToCart {...props} />
          </div>
          <small className="typography__align--right">Save to wishlist</small>
        </StyledTwoCol>
      </Layout>
    </StyledCard>
  )
}

Game.propTypes = {
  description: PropTypes.string,
  hero: PropTypes.string,
  sale: PropTypes.bool,
  price: PropTypes.number.isRequired,
  save: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  was: PropTypes.number.isRequired,
}

Game.defaultProps = {
  description: 'No description found.',
  hero: 'https://images.unsplash.com/photo-1562819789-fd366076971a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  sale: false,
}

export default Game

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import * as colors from '../styles/colors'
import pxToEm from '../utils/px_to_em'
import { typographyWeightBold, TypographyHeading2 } from '../styles/typography'

import AddToCart from '../ui_elements/add_to_cart'
import RemoveFromCart from '../ui_elements/remove_from_cart'
import OnSaleBanner from '../ui_elements/on_sale_banner'
import Layout from '../styled/layout'
import { Card } from '../styled/card'
import Divider from '../ui_elements/divider'


const StyledCard = styled.article`
  background: ${colors.white};
  overflow: hidden;
  margin-bottom: ${pxToEm(20)};
  ${Card};
`

const HeroImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: ${pxToEm(182)};
  position: relative;
`

const StyledDescription = styled.p`
  font-size: ${pxToEm(14)};
`

const StyledPrice = styled.div`
  font-size: ${pxToEm(16)};
  margin-bottom: ${pxToEm(18)};
  ${typographyWeightBold};
`

const StyledTwoCol = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledGameInfo = styled.div`
  height: ${pxToEm(100)};
`

const StyledWasNow = styled.small`
  color: ${colors.blueGray}; 
  font-size: ${pxToEm(11)};
`

const StyledWishlist = styled.small`
  color: ${colors.navy}; 
  font-size: ${pxToEm(11)};
  ${typographyWeightBold};
`

const Game = (props) => {
  const {
    addOnClick,
    description,
    isAdded,
    units,
    hero,
    sale,
    price,
    removeOnClick,
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
        <StyledGameInfo>
          <TypographyHeading2>{title}</TypographyHeading2>
          <StyledDescription>{description}</StyledDescription>
        </StyledGameInfo>
      </Layout>
      <Divider />
      <Layout>
        <StyledTwoCol>
          <StyledPrice>{`$${price}`}</StyledPrice>
          <StyledWasNow className="typography__align--right">{`Was $${was}, save $${save}`}</StyledWasNow>
        </StyledTwoCol>
        <StyledTwoCol>
          <div>
            <AddToCart addOnClick={() => addOnClick({
              description,
              hero,
              sale,
              price,
              save,
              title,
              was,
            })}
            />
            <br />
            <br />
            {isAdded && (
              <RemoveFromCart removeOnClick={() => removeOnClick({
                description,
                hero,
                sale,
                price,
                save,
                title,
                was,
              })}
              />
            )}
          </div>
          <StyledWishlist className="typography__align--right">Save to wishlist</StyledWishlist>
        </StyledTwoCol>
      </Layout>
    </StyledCard>
  )
}

Game.propTypes = {
  addOnClick: PropTypes.func.isRequired,
  isAdded: PropTypes.bool,
  description: PropTypes.string,
  hero: PropTypes.string,
  removeOnClick: PropTypes.func.isRequired,
  sale: PropTypes.bool,
  price: PropTypes.number.isRequired,
  save: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  units: PropTypes.number.isRequired,
  was: PropTypes.number.isRequired,
}

Game.defaultProps = {
  isAdded: false,
  description: 'No description found.',
  hero: 'https://images.unsplash.com/photo-1562819789-fd366076971a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  sale: false,
}

export default Game

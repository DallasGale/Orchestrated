import React from 'react'
import PropTypes from 'prop-types'

import { TypographyHeading2 } from '../styles/typography'

import AddToCart from '../ui_elements/add_to_cart'
import RemoveFromCart from '../ui_elements/remove_from_cart'
import OnSaleBanner from '../ui_elements/on_sale_banner'
import Layout from '../styled/layout'
import Divider from '../ui_elements/divider'

import {
  StyledCard,
  StyledDescription,
  StyledGameInfo,
  StyledHero,
  StyledPrice,
  StyledTwoCol,
  StyledWasNow,
  StyledWishlist,
} from './styled'

const wishlistLabel = 'Save to wishlist'

const Game = (props) => {
  const {
    addOnClick,
    description,
    isAdded,
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
      <StyledHero style={{ backgroundImage: `url('${hero}')` }}>
        {sale && <OnSaleBanner />}
      </StyledHero>

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
          <StyledWasNow
            className="typography__align--right"
          >
            {`Was $${was}, save $${save}`}
          </StyledWasNow>
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
          </div>

          <StyledWishlist
            className="typography__align--right"
          >
            {wishlistLabel}
          </StyledWishlist>
        </StyledTwoCol>
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
  was: PropTypes.number.isRequired,
}

Game.defaultProps = {
  isAdded: false,
  description: 'No description found.',
  hero: 'https://images.unsplash.com/photo-1562819789-fd366076971a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  sale: false,
}

export default Game

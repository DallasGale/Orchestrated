import React, { useState } from 'react'

import styled from 'styled-components'
// import PropTypes from 'prop-types'

import pxToEm from '../utils/px_to_em'

import Page from '../styled/page'
import Game from '../game'
import data from './data.json'

const StyledGrid = styled.div`
  display: grid;
  grid-gap: ${pxToEm(40)};
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: ${pxToEm(1060)};
`

// Cart styles
const StyledCart = styled.div`
  margin: 0 auto;
  max-width: ${pxToEm(1060)};
`

const StyledLineItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`

const cartItems = []

let cartCount = 0
const Games = () => {
  const { games } = data

  const [cart, setCart] = useState(cartItems)

  const handleAddToCart = (game) => {
    const {
      id,
      title,
      description,
      price,
    } = game
    const quantity = 1
    const addedGame = {
      quantity,
      id,
      title,
      description,
      price,
    }
    setCart([...cart, addedGame])
  }


  return (
    <Page>
      <section>
        <StyledGrid>
          {
            games.map((game) => {
              const {
                id,
                description,
                sale,
                price: { now, was },
                title,
              } = game

              const save = was - now
              return (
                <>
                  <Game
                    addToCartClick={() => handleAddToCart(game)}
                    description={description}
                    key={id}
                    sale={sale}
                    price={now}
                    save={save}
                    title={title}
                    was={was}
                  />
                </>
              )
            })
          }
        </StyledGrid>
      </section>

      <section>
        <StyledCart>
          <h3>Your Cart:</h3>
          {cart.map((item) => {
            const { now } = item.price

            // Update cart counter
            cartCount += item.quantity
            return (
              <StyledLineItem key={item.title}>
                <div>{item.title}</div>
                <div>Remove from cart</div>
                <div>{`Amount: ${item.quantity}`}</div>
                <div>{`$${now}`}</div>
              </StyledLineItem>
            )
          })
          }
        </StyledCart>
      </section>
    </Page>
  )
}

export default Games

/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import styled from 'styled-components'

import './app.scss'

import Header from './components/ui_elements/header'
import Page from './components/styled/page'
import Game from './components/game'

import data from './components/games/data.json'

import pxToEm from './components/utils/px_to_em'

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
// let cartCount = 0

const App = () => {
  // const [cartItemCount, setCartItemCount] = useState(0)
  // const { cartCountState } = props
  const { games } = data
  const [cart, setCart] = useState(cartItems)
  const [cartCount, setCartCount] = useState(0)

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
    setCartCount(cartCount + quantity)
  }

  return (
    <div className="App">
      <Header title="Games Cart" cart={cartCount} />
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
              // cartCount += item.quantity
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
    </div>
  )
}

export default App

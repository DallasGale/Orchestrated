/* eslint-disable no-else-return */
/* eslint-disable no-class-assign */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styled from 'styled-components'

import Header from './components/ui_elements/header'
import Page from './components/styled/page'
import Game from './components/game'
import Cart from './components/cart'

import data from './components/data.json'

import pxToEm from './components/utils/px_to_em'
import { reducer } from './components/utils/helpers'

import './app.scss'

const StyledGrid = styled.div`
  display: grid;
  grid-gap: ${pxToEm(40)};
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: ${pxToEm(1060)};
`

class App extends React.Component {
  state = {
    games: data.games,
    cart: [],
    newGame: {},
  }


  handleAddToCart = (game) => {
    const { cart, games } = this.state
    const exisitingGameIndex = cart.findIndex(item => item.id === game.id)
    if (exisitingGameIndex >= 0) {
      // Create a clone of the existing cart array
      const cartGames = cart.slice()
      const exisitingGame = cartGames[exisitingGameIndex]
      const updatedUnitsGame = {
        ...exisitingGame,
        units: exisitingGame.units + game.units,
        price: exisitingGame.price + game.price,
      }
      // Overight exisiting game with updated game state
      cartGames[exisitingGameIndex] = updatedUnitsGame
      this.setState({
        cart: cartGames,
      })
    } else {
      this.setState({
        cart: [...cart, game],
      })
    }

    // To trigger 'Remove from cart' button
    const exisitingGamesListIndex = games.findIndex(item => item.id === game.id)
    if (exisitingGamesListIndex >= 0) {
      const listOfGames = games.slice()
      const exisitingGamesList = listOfGames[exisitingGamesListIndex]
      const updatedShowRemoveGame = {
        ...exisitingGamesList,
        showRemove: true,
      }
      listOfGames[exisitingGamesListIndex] = updatedShowRemoveGame
      this.setState({
        games: listOfGames,
      })
    }
  }


  handleRemoveFromCart = (game) => {
    const { cart } = this.state
    const exisitingGameIndex = cart.findIndex(item => item.id === game.id)

    if (exisitingGameIndex >= 0) {
      const cartGames = cart.slice()
      const exisitingGame = cartGames[exisitingGameIndex]
      const updatedUnitsGame = {
        ...exisitingGame,
        units: exisitingGame.units - game.units,
        price: exisitingGame.price - game.price,
      }
      if (updatedUnitsGame.units >= 0) {
        cartGames[exisitingGameIndex] = updatedUnitsGame
        this.setState({
          cart: cartGames,
        })
      }
    } else {
      this.setState({
        cart: [...cart, game],
      })
    }
  }

  render() {
    const { cart, games } = this.state
    const totalUnits = cart.map(item => item.units)
    const totalCost = cart.map(item => item.price)
    return (
      <div className="App">
        <Header title="Games Cart" countExists={cart.length > 0} cart={cart.length > 0 ? totalUnits.reduce(reducer) : null} />
        <Page>
          <section>
            <StyledGrid>
              {
                games.map((game) => {
                  const {
                    id,
                    description,
                    cost: { now, was },
                    inCart,
                    sale,
                    title,
                    price,
                    units,
                    showRemove,
                  } = game
                  const save = was - now
                  return (
                    <>
                      <Game
                        id={title}
                        addOnClick={() => this.handleAddToCart(game)}
                        description={description}
                        key={id}
                        sale={sale}
                        price={price}
                        removeOnClick={() => this.handleRemoveFromCart(game)}
                        save={save}
                        title={title}
                        was={was}
                        addedToCart={inCart}
                        isAdded={showRemove}
                        units={units}
                      />
                    </>
                  )
                })
              }
            </StyledGrid>
          </section>

          <section>
            {cart.length > 0 && (
              <Cart cart={cart} totalCost={totalCost.reduce(reducer)} />
            )
            }
          </section>
        </Page>
      </div>
    )
  }
}

export default App

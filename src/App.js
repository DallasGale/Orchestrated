/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import Header from './components/ui_elements/header'
import Page from './components/styled/page'
import Game from './components/game'
import Cart from './components/cart'

import data from './components/data.json'

import { reducer } from './components/utils/helpers'

import { StyledGrid } from './styled'
import './app.scss'

const headerTitle = 'Games Cart'

class App extends React.Component {
  state = {
    games: data.games,
    cart: [],
  }

  handleFindIndex = (array, input) => {
    const index = array.findIndex(item => item.id === input.id)
    return index
  }

  handleAddToCart = (game) => {
    const { cart, games } = this.state
    const exisitingGameIndex = this.handleFindIndex(cart, game)

    if (exisitingGameIndex >= 0) {
      const cartGames = cart.slice()
      const exisitingGame = cartGames[exisitingGameIndex]
      const updatedGameUnits = {
        ...exisitingGame,
        units: exisitingGame.units + game.units,
        price: exisitingGame.price + game.price,
      }
      cartGames[exisitingGameIndex] = updatedGameUnits
      this.setState({
        cart: cartGames,
      })
    } else {
      this.setState({
        cart: [...cart, game],
      })
    }

    // To trigger 'Remove from cart' button
    const exisitingGamesListIndex = this.handleFindIndex(games, game)
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
    const exisitingGameIndex = this.handleFindIndex(cart, game)

    if (exisitingGameIndex >= 0) {
      const cartGames = cart.slice()
      const exisitingGame = cartGames[exisitingGameIndex]
      const updatedGameUnits = {
        ...exisitingGame,
        units: exisitingGame.units - game.units,
        price: exisitingGame.price - game.price,
      }
      if (updatedGameUnits.units >= 0) {
        cartGames[exisitingGameIndex] = updatedGameUnits
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

  calculateSaving = (was, now) => {
    const saving = was - now
    return saving
  }

  render() {
    const { cart, games } = this.state
    const totalUnits = cart.map(item => item.units)
    const totalCost = cart.map(item => item.price)
    return (
      <div className="App">
        <Header
          title={headerTitle}
          countExists={cart.length > 0}
          cart={cart.length > 0 && totalUnits.reduce(reducer)}
        />
        <Page>
          <section>
            <StyledGrid>
              {
                games.map((game) => {
                  const {
                    id,
                    img,
                    description,
                    cost: { now, was },
                    inCart,
                    sale,
                    title,
                    price,
                    units,
                    showRemove,
                  } = game
                  return (
                    <Game
                      addOnClick={() => this.handleAddToCart(game)}
                      addedToCart={inCart}
                      description={description}
                      hero={img}
                      isAdded={showRemove}
                      id={title}
                      key={id}
                      price={price}
                      removeOnClick={() => this.handleRemoveFromCart(game)}
                      save={this.calculateSaving(was, now)}
                      sale={sale}
                      title={title}
                      units={units}
                      was={was}
                    />
                  )
                })
              }
            </StyledGrid>
          </section>

          <section>
            {cart.length > 0 && (
              <Cart cart={cart} totalCost={totalCost.reduce(reducer)} />
            )}
          </section>
        </Page>
      </div>
    )
  }
}

export default App

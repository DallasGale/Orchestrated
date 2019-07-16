/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import Header from './components/ui_elements/header'
import Page from './components/styled/page'
import Game from './components/game'
import Cart from './components/cart'

import data from './components/data.json'

import { calculateSaving, findIndexOfArray, reducer } from './components/utils/helpers'

import { StyledGrid, StyledEmptyCart } from './styled'
import './app.scss'

const headerTitle = 'Games Cart'
const emptyCartMessage = 'Nothing in your cart'

class App extends React.Component {
  state = {
    games: data.games,
    cart: [],
  }

  handleAddToCart = (game) => {
    const { cart, games } = this.state
    const exisitingGameIndex = findIndexOfArray(cart, game)

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
    const exisitingGamesListIndex = findIndexOfArray(games, game)
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
    const { cart, games } = this.state
    const exisitingGameIndex = findIndexOfArray(cart, game)

    if (exisitingGameIndex >= 0) {
      const cartGames = cart.slice()
      const gamesList = games.slice()
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

      // To hide the 'Remove from cart' button
      if (exisitingGame.units === 0) {
        const updatedShowRemoveGame = {
          ...exisitingGame,
          showRemove: false,
        }
        if (updatedShowRemoveGame.units >= 0) {
          gamesList[exisitingGameIndex] = updatedShowRemoveGame
          this.setState({
            games: gamesList,
          })
        }
      }
      //
    } else {
      this.setState({
        cart: [...cart, game],
      })
    }
  }

  handleAddToWishlist = (game) => {
    const { games } = this.state
    const exisitingGamesListIndex = findIndexOfArray(games, game)
    if (exisitingGamesListIndex >= 0) {
      const listOfGames = games.slice()
      const exisitingGamesList = listOfGames[exisitingGamesListIndex]
      const updatedShowRemoveGame = {
        ...exisitingGamesList,
        wishlist: true,
      }
      listOfGames[exisitingGamesListIndex] = updatedShowRemoveGame

      this.setState({
        games: listOfGames,
      })
    }
  }

  render() {
    const { cart, games } = this.state
    const totalUnits = cart.map(item => item.units)
    const totalCost = cart.map(item => item.price)
    return (
      <div className="App">
        <Header
          title={headerTitle}
          countExists={cart.length > 0 && totalUnits.reduce(reducer)}
          cart={cart.length > 0 && totalUnits.reduce(reducer)}
        />
        <Page>
          <section className="spacings__padding-top--60">
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
                    wishlist,
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
                      save={calculateSaving(was, now)}
                      sale={sale}
                      title={title}
                      units={units}
                      was={was}
                      wishlist={wishlist}
                      wishlistOnClick={() => this.handleAddToWishlist(game)}
                    />
                  )
                })
              }
            </StyledGrid>
          </section>

          <section>
            {(cart.length > 0 && totalUnits.reduce(reducer))
              ? <Cart cart={cart} totalCost={totalCost.reduce(reducer)} />
              : <StyledEmptyCart>{emptyCartMessage}</StyledEmptyCart>}
          </section>
        </Page>
      </div>
    )
  }
}

export default App

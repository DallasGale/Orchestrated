import { action, decorate, observable } from 'mobx'

class GamesStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  gamesCart = []

  gamesList = [
    {
      id: 0,
      img: '',
      title: 'Cyberpunk 2077',
      description: 'A futuristic first person shooter cross ARPG set in the dystopian metropolis of Night City.',
      cost: {
        now: 80,
        was: 99,
      },
      sale: true,
      inCart: false,
    },
    {
      id: 1,
      img: '',
      title: 'Star Wars Jedi: Fallen Order',
      description: 'A third person ARPG set in the Star Wars universe where you play as a young Jedi.',
      cost: {
        now: 70,
        was: 99,
      },
      sale: true,
      inCart: false,
    },
    {
      id: 2,
      img: '',
      title: 'The Last of Us Part II',
      description: 'A story based action survival game based in a post apocolyptic workd.',
      cost: {
        now: 91,
        was: 105,
      },
      sale: true,
      inCart: false,
    },
  ]

  addToCart(event, game) {
    this.gamesCart.push(game)
    for (let i = 0; i < this.gamesList.length; i++) {
      if (this.gamesList[event]) {
        this.gamesList[event].inCart = true
      }
    }
  }

  removeFromCart(event, game) {
    console.log('this.gamesCart before', this.gamesCart)
    console.log('game.title clicked: ', game.title)
    const filteredCart = this.gamesCart.filter(item => item.title !== game.title)
    this.gamesCart = filteredCart
    console.log('this.gamesCart after', this.gamesCart)
  }
}

class RootStore {
  constructor() {
    this.gamesStore = new GamesStore(this)
  }
}

// * With MobX
decorate(RootStore, {
  addToCart: action,
  removeFromCart: action,
  gamesList: observable,
  gamesCart: observable,
})

export const appStore = new RootStore()

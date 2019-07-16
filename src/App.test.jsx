import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


describe('<App />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('add item to cart', () => {

  })

  test('remove item from cart', () => {

  })

  test('remove button displays when cart has at least 1 item', () => {

  })

  test('remove button dissapears when cart has 0 items', () => {

  })
})

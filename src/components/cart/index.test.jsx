import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Cart from '.'

import data from '../data.json'

const props = {
  cart: data.games,
}

describe('<Cart />', () => {
  test('it renders', () => {
    const Component = render(<Cart {...props} />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

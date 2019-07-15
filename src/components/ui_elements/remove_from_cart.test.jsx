import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import RemoveFromCart from './remove_from_cart'

describe('<RemoveFromCart />', () => {
  test('it renders', () => {
    const Component = render(<RemoveFromCart />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddToCart from './add_to_cart'

describe('<AddToCart />', () => {
  test('it renders', () => {
    const Component = render(<AddToCart />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

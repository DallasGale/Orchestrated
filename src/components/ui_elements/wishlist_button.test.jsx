import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import WishlistButton from './wishlist_button'

describe('<WishlistButton />', () => {
  test('it renders', () => {
    const Component = render(<WishlistButton />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

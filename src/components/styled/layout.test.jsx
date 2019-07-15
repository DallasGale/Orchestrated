import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Layout from './layout'

describe('<Layout />', () => {
  test('it renders', () => {
    const Component = render(<Layout />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

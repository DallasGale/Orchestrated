import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Page from './page'

describe('<Page />', () => {
  test('it renders', () => {
    const Component = render(<Page />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

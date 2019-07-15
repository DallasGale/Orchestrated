import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from '.'

describe('<Header />', () => {
  test('it renders', () => {
    const Component = render(<Header />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

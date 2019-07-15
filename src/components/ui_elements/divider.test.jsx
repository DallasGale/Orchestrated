import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Divider from './divider'

describe('<Divider />', () => {
  test('it renders', () => {
    const Component = render(<Divider />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

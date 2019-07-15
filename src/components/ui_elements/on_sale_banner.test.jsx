import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import OnSaleBanner from './on_sale_banner'

describe('<OnSaleBanner />', () => {
  test('it renders', () => {
    const Component = render(<OnSaleBanner />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

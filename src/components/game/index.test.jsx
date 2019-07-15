import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import Game from '.'

const props = {
  addOnClick: () => { },
  removeOnClick: () => { },
  price: 0,
  save: 0,
  title: 'Title',
  was: 0,
}

describe('<Game />', () => {
  test('it renders', () => {
    const Component = render(<Game {...props} />)
    expect(toJson(Component)).toMatchSnapshot()
  })
})

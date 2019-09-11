/* eslint-env jest */

import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import sinon from 'sinon'

import Index from '../pages/index.js'
import expectExport from 'expect'

const showsMock = [
    { id: 1, name: "Foo" },
    { id: 2, name: "Bar" },
    { id: 3, name: "Baz" },
    { id: 4, name: "Qux" }
  ]

describe('<Index />', () => {
  it('shows "Batman TV Shows"', () => {
    const wrapper = mount(<Index shows={ showsMock } />)
    expect(wrapper.find('Index').find('h1').text()).toEqual('Batman TV Shows')
  })
})

describe('<Index /> snapshot', () => {
  it('matches snapshot', () => {
    const component = renderer.create(<Index shows={ showsMock } />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

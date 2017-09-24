import React from 'react'
import LogOutForm from './index'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('Log out form component', () => {
  function getRenderedComponent () {
    return renderer.create(<LogOutForm />)
  }

  function getShallowComponent (onLogOut = () => {}) {
    return shallow(<LogOutForm onLogOut={onLogOut}/>)
  }

  it('should render', () => {
    expect(getRenderedComponent().toJSON()).toMatchSnapshot()
  })

  it('should call "onLogOut" callback when the form submitted', () => {
    const onLogOut = jest.fn(),
      form = getShallowComponent(onLogOut)

    form.simulate('submit', {preventDefault: jest.fn()})
    expect(onLogOut).toHaveBeenCalledTimes(1)
  })
})

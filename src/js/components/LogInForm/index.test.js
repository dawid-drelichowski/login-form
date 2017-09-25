import React from 'react'
import LogInForm from './index'
import config from 'mocks/config.json'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('Log in form component', () => {
  function getRenderedComponent (config) {
    return renderer.create(<LogInForm config={config}/>)
  }

  function getShallowComponent (config, onLogIn = () => {}) {
    return shallow(<LogInForm config={config} onLogIn={onLogIn}/>)
  }

  it('should render', () => {
    expect(getRenderedComponent(config).toJSON()).toMatchSnapshot()
  })

  it('should call "onLogIn" callback when the form submitted and login and password valid ', () => {
    const onLogIn = jest.fn(),
      formInstance = getShallowComponent(config, onLogIn).instance()

    formInstance.onInputChange('email', config.email)
    formInstance.onInputChange('password', 'Password666')
    formInstance.onSubmit({preventDefault: jest.fn()})
    expect(onLogIn).toHaveBeenCalledTimes(1)
  })

  it('should show invalid message when login or password invalid', () => {
    const form = getShallowComponent(config),
      instance = form.instance()

    instance.onInputChange('email', 'wrong@wrong.pl')
    instance.onInputChange('password', 'Wrong1')
    form.simulate('submit', {preventDefault: jest.fn()})
    expect(form.contains(<div>Invalid email or password</div>)).toBeTruthy()
  })
})

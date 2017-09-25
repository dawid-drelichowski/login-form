import React from 'react'
import App from './index'
import config from 'mocks/config.json'
import {shallow} from 'enzyme'

describe('App component', () => {
  function getShallowComponent (config) {
    return shallow(<App config={config}/>)
  }

  it('should render log in form when user logged out', () => {
    const app = getShallowComponent(config)

    app.instance().onLogOut()
    expect(app.is('LogInForm')).toBeTruthy()
  })

  it('should render log out form when user logged in', () => {
    const app = getShallowComponent(config)

    app.instance().onLogIn()
    expect(app.is('LogOutForm')).toBeTruthy()
  })
})

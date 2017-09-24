// @flow
import React, {Component} from 'react'
import type {Node} from 'react'
import type {Config} from 'types/Config'
import LogInForm from 'components/LogInForm'
import LogOutForm from 'components/LogOutForm'
import './style.css'

export default class App extends Component<{config: Config}, {loggedIn: boolean}> {
  state = {loggedIn: false}
  onLogIn = (): void => {
    this.setState({loggedIn: true})
  }
  onLogOut = (): void => {
    this.setState({loggedIn: false})
  }
  render (): Node {
    return this.state.loggedIn
      ? <LogOutForm onLogOut={this.onLogOut}/> : <LogInForm config={this.props.config} onLogIn={this.onLogIn}/>
  }
}

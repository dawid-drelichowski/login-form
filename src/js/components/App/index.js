// @flow
import * as React from 'react'
import LogInForm from 'components/LogInForm'
import LogOutForm from 'components/LogOutForm'
import './style.css'

export default class App extends React.Component<{}, {loggedIn: boolean}> {
  state = {loggedIn: false}
  onLogIn = (): void => {
    this.setState({loggedIn: true})
  }
  onLogOut = (): void => {
    this.setState({loggedIn: false})
  }
  render (): React.Node {
    return this.state.loggedIn ? <LogOutForm onLogOut={this.onLogOut}/> : <LogInForm onLogIn={this.onLogIn}/>
  }
}

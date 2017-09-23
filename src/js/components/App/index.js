import React, {Component} from 'react'
import LogInForm from 'components/LogInForm'
import LogOutForm from 'components/LogOutForm'
import './style.css'

export default class App extends Component {
  state = {loggedIn: false}
  onLogIn = () => {
    this.setState({loggedIn: true})
  }
  onLogOut = () => {
    this.setState({loggedIn: false})
  }
  render () {
    return this.state.loggedIn ? <LogOutForm onLogOut={this.onLogOut}/> : <LogInForm onLogIn={this.onLogIn}/>
  }
}

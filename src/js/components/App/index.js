import React, {Component} from 'react'
import './style.css'

export default class App extends Component {
  state = this.constructor.getDefaultState()
  static getDefaultState () {
    return {
      email: this.getInputDefaultState(),
      password: this.getInputDefaultState(),
      remember: this.getInputDefaultState(false),
      showInvalid: false,
      loggedIn: false
    }
  }
  static getInputDefaultState (value = '') {
    return {value, invalid: false, message: ''}
  }
  onInputChange = event => {
    const target = event.target,
      value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({[target.id]: this.constructor.getInputDefaultState(value), showInvalid: false})
  }
  onInvalid = event => {
    const target = event.target,
      validity = target.validity,
      id = target.id

    if (validity.valueMissing) {
      this.setState({
        [id]: {...this.state[id], invalid: true, message: 'Missing Value!'}
      })
    }
    if (validity.typeMismatch) {
      this.setState({
        [id]: {...this.state[id], invalid: true, message: 'Wrong email format!'}
      })
    }
    if (validity.patternMismatch) {
      this.setState({
        [id]: {...this.state[id], invalid: true, message: 'Wrong password format!'}
      })
    }
    event.preventDefault()
  }
  logIn = event => {
    let state = {showInvalid: true}
    event.preventDefault()

    if (this.state.email.value === 'test@test.pl' && this.state.password.value === 'Password1.') {
      state = {loggedIn: true, showInvalid: false}
    }
    this.setState(state)
  }
  logOut = event => {
    event.preventDefault()
    this.setState(this.constructor.getDefaultState())
  }
  render () {
    return this.state.loggedIn ? this.renderLoggedIn() : this.renderForm()
  }
  renderForm () {
    return <form method="post" onSubmit={this.logIn}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={this.state.email.value} required={true} placeholder="E-mail"
          onChange={this.onInputChange} onInvalid={this.onInvalid}/>
        {this.state.email.invalid ? <div>{this.state.email.message}</div> : ''}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}" value={this.state.password.value} required={true}
          placeholder="Password" onChange={this.onInputChange} onInvalid={this.onInvalid}/>
        {this.state.password.invalid ? <div>{this.state.password.message}</div> : ''}
        <label htmlFor="remember">Rember me</label>
        <input type="checkbox" name="remember" id="remember" checked={this.state.remember.value}
          onChange={this.onInputChange}/>
        <input type="submit" value="Login"/>
        {this.state.showInvalid ? <div>Invalid email or password</div> : ''}
      </fieldset>
    </form>
  }
  renderLoggedIn () {
    return <form method="post" onSubmit={this.logOut}>
      <fieldset>
        <div>You are logged in!</div>
        <input type="submit" value="Logout"/>
      </fieldset>
    </form>
  }
}

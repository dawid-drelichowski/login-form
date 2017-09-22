import React, {Component} from 'react'
import './style.css'

export default class App extends Component {
  state = {
    email: this.getInputDefaultState(),
    password: this.getInputDefaultState(),
    remember: this.getInputDefaultState(false)
  }
  onInputChange = event => {
    const target = event.target,
      value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({[target.name]: {value}})
  }
  onInvalid = event => {
    const target = event.target,
      validity = target.validity

    if (validity.valueMissing) {
      this.setState({[target.name]: {invalid: true, message: 'Missing Value!'}})
    }
    event.preventDefault()
  }
  getInputDefaultState (value = '') {
    return {
      value,
      invalid: false,
      message: ''
    }
  }
  render () {
    return <form method="post">
      <fieldset>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={this.state.email.value} required={true} placeholder="E-mail"
          onChange={this.onInputChange} onInvalid={this.onInvalid}/>
        {this.state.email.invalid ? <div>{this.state.email.message}</div> : ''}
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={this.state.password.value} required={true}
          placeholder="Password" onChange={this.onInputChange} onInvalid={this.onInvalid}/>
        <label htmlFor="remember">Rember me</label>
        <input type="checkbox" name="remember" id="remember" checked={this.state.remember.value}
          onChange={this.onInputChange}/>
        <input type="submit" value="Login"/>
      </fieldset>
    </form>
  }
}

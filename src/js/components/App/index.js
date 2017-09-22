import React, {Component} from 'react'
import './style.css'

export default class App extends Component {
  render () {
    return <form method="POST">
      <fieldset>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" required={true}/>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" required={true}/>
        <label htmlFor="remember">Rember me</label>
        <input type="checkbox" name="remember" id="remember"/>
        <input type="submit" value="login"/>
      </fieldset>
    </form>
  }
}

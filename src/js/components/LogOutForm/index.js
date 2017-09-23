import React, {Component} from 'react'

export default class LogOutForm extends Component {
  onLogOut = event => {
    event.preventDefault()
    this.props.onLogOut()
  }
  render () {
    return <form method="post" onSubmit={this.onLogOut}>
      <fieldset>
        <div>You are logged in!</div>
        <input type="submit" value="Logout"/>
      </fieldset>
    </form>
  }
}
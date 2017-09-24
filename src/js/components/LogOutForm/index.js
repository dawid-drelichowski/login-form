// @flow
import React, {Component} from 'react'
import type {Node} from 'react'

export default class LogOutForm extends Component<{onLogOut?: () => void}> {
  onSubmit = (event: SyntheticEvent<HTMLInputElement>): void => {
    const onLogOut: () => void = this.props.onLogOut ? this.props.onLogOut : () => {}
    event.preventDefault()
    onLogOut()
  }
  render (): Node {
    return <form method="post" onSubmit={this.onSubmit}>
      <fieldset>
        <div>You are logged in!</div>
        <input type="submit" value="Logout"/>
      </fieldset>
    </form>
  }
}

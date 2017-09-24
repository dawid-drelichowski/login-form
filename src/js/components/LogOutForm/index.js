// @flow
import * as React from 'react'

export default class LogOutForm extends React.Component<{onLogOut?: () => void}> {
  onLogOut = (event: SyntheticEvent<HTMLButtonElement>): void => {
    const onLogOut: () => void = this.props.onLogOut ? this.props.onLogOut : () => {}
    event.preventDefault()
    onLogOut()
  }
  render (): React.Node {
    return <form method="post" onSubmit={this.onLogOut}>
      <fieldset>
        <div>You are logged in!</div>
        <input type="submit" value="Logout"/>
      </fieldset>
    </form>
  }
}
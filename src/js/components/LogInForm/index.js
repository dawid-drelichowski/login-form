// @flow
import React, {Component} from 'react'
import type {Node} from 'react'
import type {Config} from 'types/Config'
import bcrypt from 'bcryptjs'
import ValidationAwareInput from 'components/ValidationAwareInput'

export default class LogInForm extends Component<
  {config: Config, onLogIn?: () => void}, {email: string, password: string, showInvalid: boolean}
> {
  state = {email: '', password: '', showInvalid: false}
  onInputChange = (id: string, value: string) => {
    this.setState({[id]: value})
  }
  onSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    const onLogIn: () => void = this.props.onLogIn ? this.props.onLogIn : () => {},
      config = this.props.config
    let showInvalid: boolean = true
    event.preventDefault()

    if (this.state.email === config.email && bcrypt.compareSync(this.state.password, config.password)) {
      showInvalid = false
      onLogIn()
    }
    this.setState({showInvalid})
  }
  render (): Node {
    return <form method="post" onSubmit={this.onSubmit}>
      <fieldset>
        <ValidationAwareInput type="email" label="E-mail" id="email" name="email" required={true} placeholder="E-mail"
          autoComplete="off" onChange={this.onInputChange}/>
        <ValidationAwareInput type="password" label="Password" id="password" name="password"
          pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}" required={true} placeholder="Password"
          onChange={this.onInputChange}/>
        <ValidationAwareInput type="checkbox" label="Remember me" id="remember" name="remember"/>
        {this.state.showInvalid ? <div>Invalid email or password</div> : ''}
        <input type="submit" value="Login"/>
      </fieldset>
    </form>
  }
}

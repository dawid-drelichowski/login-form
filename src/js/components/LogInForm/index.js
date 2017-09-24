// @flow
import * as React from 'react'
import ValidationAwareInput from 'components/ValidationAwareInput'

export default class LogInForm extends React.Component<
  {onLogIn?: () => void}, {email: string, password: string, showInvalid: boolean}
> {
  state = {email: '', password: '', showInvalid: false}
  onInputChange = (id: string, value: string) => {
    this.setState({[id]: value})
  }
  onSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    const onLogIn: () => void = this.props.onLogIn ? this.props.onLogIn : () => {}
    let showInvalid: boolean = true
    event.preventDefault()

    if (this.state.email === 'test@test.pl' && this.state.password === 'Password1.') { // @todo: login and password should be as hash
      showInvalid = false
      onLogIn()
    }
    this.setState({showInvalid})
  }
  render (): React.Node {
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

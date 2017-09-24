// @flow
import * as React from 'react'

export default class ValidationAwareInput extends React.Component<
  {type: string, id: string, label: string, onChange?: (id: string, value: string) => void},
  {value: string, checked: boolean, invalidMessage: string}
> {
  state = {value: '', checked: false, invalidMessage: ''}
  onChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const onChange: (id: string, value: string) => void = this.props.onChange ? this.props.onChange : () => {},
      target: HTMLInputElement = event.target,
      value: string = target.value

    this.setState({value, checked: target.checked, invalidMessage: ''})
    onChange(target.id, value)
  }
  onInvalid = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    this.setState({invalidMessage: `Invalid ${this.props.label.toLowerCase()}`})
    event.preventDefault()
  }
  render (): React.Node {
    const {type, id, label, onChange, ...props} = this.props,
      invalidMessage: string = this.state.invalidMessage

    return <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={this.state.value} checked={this.state.checked} {...props}
        onChange={this.onChange} onInvalid={this.onInvalid}/>
      {invalidMessage ? <div>{invalidMessage}</div> : ''}
    </div>
  }
}

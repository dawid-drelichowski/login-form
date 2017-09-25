// @flow
import React, {Component} from 'react'
import type {Node} from 'react'
import './style.css'

export default class ValidationAwareInput extends Component<
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
  render (): Node {
    const {type, id, label, onChange, ...props} = this.props,
      invalidMessage: string = this.state.invalidMessage

    return <div className="validation-aware-input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={this.state.value} checked={this.state.checked}
        className={type === 'checkbox' ? 'checkbox' : 'input'} {...props} onChange={this.onChange}
        onInvalid={this.onInvalid}/>
      {invalidMessage ? <div className="invalid">{invalidMessage}</div> : ''}
    </div>
  }
}

import React, {Component} from 'react'

export default class ValidationAwareInput extends Component {
  state = {value: '', checked: '', invalidMessage: ''}
  onChange = event => {
    const target = event.target,
      value = target.value

    this.setState({value, checked: target.checked, invalidMessage: ''})
    this.props.onChange(target.id, value) //@todo: this function is not always set
  }
  onInvalid = event => {
    this.setState({invalidMessage: `Invalid ${this.props.label.toLowerCase()}`})
    event.preventDefault()
  }
  render () {
    const {type, id, label, onChange, ...props} = this.props,
      invalidMessage = this.state.invalidMessage

    return <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={this.state.value} checked={this.state.checked} {...props} onChange={this.onChange} onInvalid={this.onInvalid}/>
      {invalidMessage ? <div>{invalidMessage}</div> : ''}
    </div>
  }
}

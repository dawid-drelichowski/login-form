import React from 'react'
import ValidationAwareInput from './index'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('Validation aware input component', () => {
  function getRenderedComponent (type, id, label, props = {}) {
    return renderer.create(<ValidationAwareInput type={type} id={id} label={label} {...props}/>)
  }

  function getShallowComponent (type, id, label, onChange = () => {}, props = {}) {
    return shallow(<ValidationAwareInput type={type} id={id} label={label} onChange={onChange} {...props}/>)
  }

  it('should render without additional input attributes', () => {
    expect(getRenderedComponent('text', 'name', 'Your name').toJSON()).toMatchSnapshot()
  })

  it('should render with additional input attributes', () => {
    expect(getRenderedComponent('text', 'name', 'Your name', {placeholder: 'Your name', required: true})
      .toJSON()).toMatchSnapshot()
  })

  it('should have value when input changed', () => {
    const value = 'Dawid',
      inputSelector = 'input[type="text"]',
      validationAwareInput = getShallowComponent('text', 'name', 'Your name')

    validationAwareInput.find(inputSelector).simulate('change', {target: {value}})
    expect(validationAwareInput.find(inputSelector).prop('value')).toEqual(value)
  })

  it('should call "onChange" callback when input changed', () => {
    const id = 'name',
      value = 'Natalia',
      onChange = jest.fn(),
      validationAwareInput = getShallowComponent('text', id, 'Your name', onChange)

    validationAwareInput.find('input[type="text"]').simulate('change', {target: {id, value, checked: false}})
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toBeCalledWith(id, value)
  })

  it('should show invalid message when input invalid', () => {
    const validationAwareInput = getShallowComponent('text', 'name', 'Your name', () => {}, {required: true})

    validationAwareInput.find('input[type="text"]').simulate('invalid', {preventDefault: jest.fn()})
    expect(validationAwareInput.contains(<div className="invalid">Invalid your name</div>)).toBeTruthy()
  })
})

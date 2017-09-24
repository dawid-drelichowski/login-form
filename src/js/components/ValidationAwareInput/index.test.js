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
      form = getShallowComponent('text', 'name', 'Your name')

    form.find(inputSelector).simulate('change', {target: {value}})
    expect(form.find(inputSelector).prop('value')).toEqual(value)
  })
})

import React from 'react'
import Experiment from '../../../src/pages/index/experiment'
import { shallow } from 'enzyme';

describe('Experiment Component', () => {
  test('should be able to trigger button click event', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<Experiment handleClick={handleClick}/>)

    const button = wrapper.find('AtButton')
    button.simulate('click')

    expect(handleClick).toBeCalled();
  });
})

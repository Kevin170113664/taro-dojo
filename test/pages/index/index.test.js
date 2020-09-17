import React from 'react'
import Index from '../../../src/pages/index/index'
import { shallow } from 'enzyme';

test('should render our first component', () => {
  const wrapper = shallow(<Index />)

  const helloWorld = wrapper.find('.hello-world')

  expect(helloWorld.text()).toEqual('Hello world!');
});

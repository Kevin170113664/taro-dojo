import React from 'react'
import Index from '../../../src/pages/index/index'
import {shallow} from 'enzyme';

jest.mock('@tarojs/taro', () => ({
  request: () => new Promise((resolve) => resolve({data: {Website: 'fake response'}})),
  getEnv: () => 'env'
}))

const delay = async (ms = 50) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

describe('Index Component', () => {
  test('should be able to render Index component', () => {
    const wrapper = shallow(<Index/>)

    const helloWorld = wrapper.find('.hello-world')
    const button = wrapper.find('AtButton')

    expect(helloWorld.text()).toEqual('Hello World!');
    expect(button.props().type).toEqual('primary');
  });

  test('should be able to render light theme', () => {
    const wrapper = shallow(<Index theme="light"/>)

    const button = wrapper.find('AtButton')

    expect(button.props().type).toEqual('secondary');
  });

  test('should be able to fire a request', async () => {
    const wrapper = shallow(<Index/>)

    const button = wrapper.find('AtButton')
    button.simulate('click')
    await delay()
    wrapper.update()
    const textView = wrapper.find('.hello-world')

    expect(textView.props().children).toEqual('fake response');
  });
})

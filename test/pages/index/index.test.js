import React from 'react'
import Index from '../../../src/pages/index/index'
import { act, render } from 'taro-testing-library'

test('should render component', () => {
  const { container, debug } = render(<Index />)
  debug()
  const helloWorld = container.querySelector('.index')

  expect(helloWorld.innerHTML).toEqual('Hello world!');
});

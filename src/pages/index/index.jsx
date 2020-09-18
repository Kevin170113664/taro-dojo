import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {
  render () {
    const { onButtonClick, theme } = this.props

    const button = theme === 'light'
      ? <AtButton type='secondary' onClick={onButtonClick}>Light Theme</AtButton>
      : <AtButton type='primary' onClick={onButtonClick}>Default Theme</AtButton>

    return (
      <View className='index'>
        <Text className='hello-world'>Hello world!</Text>
        {button}
      </View>
    )
  }
}

Index.propTypes = {
  theme: PropTypes.string,
  onButtonClick: PropTypes.any
}

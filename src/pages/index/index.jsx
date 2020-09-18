import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {
  render () {
    const button = this.props.theme === 'light'
      ? <AtButton type='secondary'>Light Theme</AtButton>
      : <AtButton type='primary'>Default Theme</AtButton>

    return (
      <View className='index'>
        <Text className='hello-world'>Hello world!</Text>
        {button}
      </View>
    )
  }
}

Index.propTypes = {
  theme: PropTypes.string
}

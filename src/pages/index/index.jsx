import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {
  render () {
    if (this.props.theme === 'light') {
      return (
        <View className='index'>
          <Text className='hello-world'>Hello world!</Text>
          <AtButton type='secondary'>Light Theme</AtButton>
        </View>
      )
    }

    return (
      <View className='index'>
        <Text className='hello-world'>Hello world!</Text>
        <AtButton type='primary'>Default Theme</AtButton>
      </View>
    )
  }
}

Index.propTypes = {
  theme: PropTypes.string
}

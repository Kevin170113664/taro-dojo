import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {

  render () {
    return (
      <View className='index'>
        <Text className='hello-world'>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
      </View>
    )
  }
}

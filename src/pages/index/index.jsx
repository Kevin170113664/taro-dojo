import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
// import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text className='hello custom-class'>Hello world!</Text>
        {/*<AtButton type='primary'>I need Taro UI</AtButton>*/}
      </View>
    )
  }
}

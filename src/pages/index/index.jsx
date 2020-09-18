import Taro from '@tarojs/taro'
import React, {Component} from 'react'
import * as PropTypes from 'prop-types';
import {View, Text} from '@tarojs/components'
import {AtButton, AtMessage} from 'taro-ui'
import Experiment from './experiment';
import './index.less'

export default class Index extends Component {
  handleClick(type) {
    Taro.atMessage({type, message: '哟，这是一条消息'})
  }

  render() {
    const {onButtonClick, theme} = this.props

    const button = theme === 'light'
      ? <AtButton type='secondary' onClick={onButtonClick}>Light Theme</AtButton>
      : <AtButton type='primary' onClick={onButtonClick}>Default Theme</AtButton>

    return (
      <View className='index'>
        <AtMessage/>
        <Text className='hello-world'>Hello world!</Text>
        {button}
        <Experiment handleClick={this.handleClick.bind(this)}/>
      </View>
    )
  }
}

Index.propTypes = {
  theme: PropTypes.string,
  onButtonClick: PropTypes.func
}

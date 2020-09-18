import Taro from '@tarojs/taro'
import React, {Component} from 'react'
import * as PropTypes from 'prop-types';
import {View, Text} from '@tarojs/components'
import {AtButton, AtMessage} from 'taro-ui'
import Experiment from './experiment';
import './index.less'

export default class Index extends Component {
  state = {
    text: 'Hello World!'
  }

  handleClick(type) {
    Taro.atMessage({type, message: '哟，这是一条消息'})
  }

  async handleRequest() {
    const url = 'https://api.jikan.moe/v3'
    const response = await Taro.request({url})
    this.setState({text: response.data.Website})
  }

  render() {
    const {theme} = this.props

    const button = theme === 'light'
      ? <AtButton type='secondary' onClick={this.handleRequest.bind(this)}>点击发送请求</AtButton>
      : <AtButton type='primary' onClick={this.handleRequest.bind(this)}>点击发送请求</AtButton>

    return (
      <View className='index'>
        <AtMessage/>
        {button}
        <Text className='hello-world'>{this.state.text}</Text>
        <Experiment handleClick={this.handleClick.bind(this)}/>
      </View>
    )
  }
}

Index.propTypes = {
  theme: PropTypes.string,
}

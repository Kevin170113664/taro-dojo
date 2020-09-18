import React, { Component } from 'react'
import * as PropTypes from 'prop-types';
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

export default class Experiment extends Component {
  render () {
    const { handleClick } = this.props

    return (
      <View className='index'>
        <AtButton type='secondary' onClick={handleClick}>点我会显示通知</AtButton>
      </View>
    )
  }
}

Experiment.propTypes = {
  handleClick: PropTypes.func
}

import { Component } from 'react'
import 'taro-ui/dist/style/index.scss'
import './app.less'

class App extends Component {
  render () {
    return this.props.children
  }
}

export default App

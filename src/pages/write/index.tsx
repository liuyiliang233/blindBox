import { Component } from 'react'
import { View, Textarea } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;'
          autoFocus placeholder='把你的信息留下吧～'
        />
      </View>
    )
  }
}

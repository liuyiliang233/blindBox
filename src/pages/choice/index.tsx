import { Component } from 'react'
import { View, Text, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'

import './index.scss'


const enum BTN_METHOD {
  LAY = 'LAY',
  TAKE = 'TAKE',
};

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  btnHandle(info) {
    const { method, label } = info;
    if(method === BTN_METHOD.LAY) {
      Taro.navigateTo({
        url: '/pages/write/index'
      })
      return;
    }
    Taro.showToast({
      title: method + label,
      icon: 'none',
      duration: 2000
    })
  }

  renderChoiceBox() {

    const config = [
      {
        sex: 'male',
        label: '男',
      },
      {
        sex: 'female',
        label: '女',
      },
    ];

    return (
      <>
        {config.map((item, idx) => {
          const { label } = item;
          return (
            <View key={idx} className='choice-box'>
              <View><Text>{label}生</Text></View>
              <View className='btn-view'
                onClick={() => this.btnHandle({ ...item, method: BTN_METHOD.LAY })}
              >
                <Text className='btn-text'>放入一张{label}生纸条</Text>
              </View>
              <View className='btn-view'
                onClick={() => this.btnHandle({ ...item, method: BTN_METHOD.TAKE })}
              >
                <Text className='btn-text'>抽取一张{label}生纸条</Text>
              </View>
            </View>
          );
        })
        }
      </>
    );
  }

  render () {
    return (
      <View className='index'>
        {this.renderChoiceBox()}
      </View>
    )
  }
}

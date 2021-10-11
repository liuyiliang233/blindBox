import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { inject, observer } from 'mobx-react';
import Taro from '@tarojs/taro'
import { UserStoreType } from '../../store/index';

import './index.scss'

const enum BTN_METHOD {
  LAY = 'LAY',
  TAKE = 'TAKE',
};

@inject('userInfo')
@observer
export default class Index extends Component<{
  userInfo: UserStoreType
}> {


  state: State = {

  };

  componentWillMount () { }

  componentDidMount () {
    if(Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
      const self = this;

      Taro.getStorage({
        key: 'userInfo',
        success (res) {
          if(res.data) {
            console.log(333, self.props.userInfo.prototype);

            self.props?.userInfo.prototype.setUserInfo(JSON.parse(res.data));

            self.setState({
              userInfo: JSON.parse(res.data),
              hasUserInfo: true,
            });
          }
        }
      })
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  btnHandle(info) {
    const { method, label } = info;
    if(!this.props.userInfo.prototype.userInfo) {
      Taro.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          try {
            Taro.setStorageSync('userInfo', JSON.stringify(res))
          } catch (e) {  }
        },
        fail: (err) => {
          console.log('err', err);

        }
      })

      return;
    }
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

interface State {

}

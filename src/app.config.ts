export default {
  pages: [
    'pages/choice/index',
    'pages/myNote/index',
    'pages/confession/index',
    'pages/write/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000',
    selectedColor: '#ffc0cb',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/myNote/index',
        text: '我的纸条',
      },
      {
        pagePath: 'pages/choice/index',
        text: '抽个对象',
      },
      {
        pagePath: 'pages/confession/index',
        text: '表白墙',
      },
    ],
    position: 'top',
  }
}

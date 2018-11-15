import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段下的数据会被填充到 app.json ／ page.json
  config: {
      "navigationBarTitleText": "小程序官方组件展示"
  }
};

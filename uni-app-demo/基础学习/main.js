import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 通过Vue的原型定义全局数据
Vue.prototype.blogUrl = 'zoeeying.github.io'

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

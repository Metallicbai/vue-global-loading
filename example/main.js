import Vue from 'vue'
import App from './App.vue'
import $loading from '../src/main'
Vue.config.productionTip = false
Vue.use($loading)
new Vue({
  render: h => h(App)
}).$mount('#app')

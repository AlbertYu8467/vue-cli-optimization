import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import ElementUI from 'element-ui';
Vue.use(ElementUI);


import '@/assets/style/index.scss';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

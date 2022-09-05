import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/index'
import store from '../store/index'
import '../api/mock.js'
import * as echarts from 'echarts';
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts =  echarts


new Vue({
    render: h => h(App),
    store,
    router: router,

}).$mount('#app')
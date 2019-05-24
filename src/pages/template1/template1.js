// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './template1.vue'
import {post,get} from '../../util/http'
import 'echarts/theme/shine.js'
import '../../js/echarts/theme/jhmk.js'
import Cookies from 'js-cookie'
import Vuex from 'vuex'
import store from '../../js/vuex/store'
import Toasted from 'vue-toasted';
import 'material-design-icons/iconfont/material-icons.css';
import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import '../../../theme/index.css';

Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(Toasted,{
  theme: "toasted-primary",
  position: "top-right",
  duration : 5000,
  iconPack : 'material' // set your iconPack, defaults to material. material|fontawesome|custom-class
})


Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$currentTheme = Cookies.get('currentTheme')?Cookies.get('currentTheme'): 'shine';

// 引入mockjs
require('@/assets/data/mock.js');

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import  './mystyle.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import Test from './test'
import Home from './Home'
import SearchLocation from './SearchLocation'

Vue.use(VueRouter);
Vue.use(MintUI);

//配置路由
const routes = [
  { path: '/home',name:'home', component: Home },
  { path: '/test',name:'test', component: Test },
  { path: '/searchLocation',name:'searchlocation', component: SearchLocation }
]
//实例化
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


/* eslint-disable no-new */
//挂载路由
new Vue({
  el: '#app',
  router,
  components: { App },

})

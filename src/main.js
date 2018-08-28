// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/base';
import './style/rem.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './componets/iconfont.js';


import App from './App';
import Test from './test';
import Location from './location/Location';
import SearchLocation from './location/SearchLocation';
import Home from './Home';
import Login from './Login';
import Takeaway from './home/Takeaway';
import Order from './home/Order';
import Discover from './home/Discover';
import Mine from './home/Mine';
import SellerList from './home/SellerList';
import Seller from './home/Seller';
import Goods from './home/Goods';

Vue.use(VueRouter);
Vue.use(MintUI);

//配置路由
const routes = [
  { path: '/Location',name:'Location', component: Location },
  { path: '/test',name:'test', component: Test },
  { path: '/searchLocation',name:'searchLocation', component: SearchLocation },
  { path: '/Home',name:'Home', component: Home},
  { path: '/Login',name:'Login', component: Login},
  { path: '/Takeaway',name:'Takeaway', component: Takeaway},
  { path: '/Order',name:'Order', component: Order},
  { path: '/Discover',name:'Discover', component: Discover},
  { path: '/Mine',name:'Mine', component: Mine},
  { path: '/SellerList',name:'SellerList', component:SellerList},
  { path: '/Seller',name:'Seller', component:Seller},
  { path: '/Goods',name:'Goods', component:Goods}
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

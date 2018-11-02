// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/base';
import './config/rem.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './componets/iconfont.js';
import store from './store/index';
import 'jquery';

Vue.use(VueRouter);

Vue.use(MintUI);


import App from './App';
import Test from './page/test';
import Location from './page/location/Location';
import SearchLocation from './page/location/SearchLocation';
import Home from './page/Home';
import Login from './page/Login';
import Takeaway from './page/home/Takeaway';
import Order from './page/home/Order';
import Discover from './page/home/Discover';
import Mine from './page/home/Mine';
import SellerList from './page/home/SellerList';
import Seller from './page/home/Seller';
import Goods from './page/home/Goods';
import Shopcart from './page/home/Shopcart';



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
  { path: '/Goods',name:'Goods', component:Goods},
  { path: '/Shopcart',name:'Shopcart', component:Shopcart}
]

//实例化
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


//挂载路由
new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})

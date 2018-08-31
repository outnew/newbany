/**
 * created by zww on 2018/8/27
 */
'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import { GEOLOCATION,SETLOCATION } from './mutation-types'

export  default new Vuex.Store({
  state:{
    latitude:'',//当前位置纬度
    longitude:'',//当前位置经度
    count:[]
  },
  mutations: {
    //increment: state => state.count++,
    //decrement: state => state.count--,

    GEOLOCATION(state,geo) {
      console.log("mutation:"+JSON.stringify(geo.latitude))
      state.latitude=geo.latitude;
      state.longitude = geo.longitude;
    }
  },
  actions: {
    SETLOCATION(context,geo) {
      console.log("action:"+JSON.stringify(geo))
      context.commit("GEOLOCATION",geo);
    }
  }
})

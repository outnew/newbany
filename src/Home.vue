<template>
  <div style="position: relative">

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="takeaway" class="box wrap" style="flex-direction: row">
        <v-takeaway style="width: 100%"></v-takeaway>
      </mt-tab-container-item>
      <mt-tab-container-item id="order">
        order
      </mt-tab-container-item>
      <mt-tab-container-item id="discover">
        discover
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
       mine
      </mt-tab-container-item>
    </mt-tab-container>


    <mt-tabbar name="tabbar" v-model="selected" fixed>
      <mt-tab-item id="takeaway" @click.native.prevent="active = 'takeaway'">
        <img slot="icon" src="./images/home_btmTab_Takeaway.png" v-show="selected!='takeaway'">
        <img slot="icon" src="./images/home_btmTab_TakeawaySelected.png" v-show="selected=='takeaway'">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order" @click.native.prevent="active = 'order'">
        <img slot="icon" src="./images/home_btmTab_Order.png" v-show="selected!='order'">
        <img slot="icon" src="./images/home_btmTab_OrderSelected.png" v-show="selected=='order'">
        订单
      </mt-tab-item>
      <mt-tab-item id="discover"  @click.native.prevent="active = 'discover'">
        <img slot="icon" src="./images/home_btmTab_Discover.png" v-show="selected!='discover'">
        <img slot="icon" src="./images/home_btmTab_DiscoverSelected.png" v-show="selected=='discover'">
        发现
      </mt-tab-item>
      <mt-tab-item id="mine"  @click.native.prevent="active = 'mine'">
        <img slot="icon" src="./images/home_btmTab_Mine.png" v-show="selected!='mine'">
        <img slot="icon" src="./images/home_btmTab_MineSelected.png" v-show="selected=='mine'">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  import vTakeaway from './home/Takeaway';
  export default {
    name: "Home",
    data() {
      return {
        selected: 'takeaway',
        active:'takeaway',
        img:[''],
      };
    },
    mounted(){
      this.selected = 'takeaway';
    },
    components: {
     vTakeaway:vTakeaway
    }
  }
</script>

<style scoped>

</style>

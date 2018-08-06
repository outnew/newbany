<template>
  <div>

    <mt-tabbar name="tabbar" v-model="selected" fixed>
      <mt-tab-item id="takeaway">
        <img slot="icon" src="../images/home_iconTakeaway.png" v-show="selected!='takeaway'">
        <img slot="icon" src="../images/home_iconTakeawaySelected.png" v-show="selected=='takeaway'">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="../images/home_iconOrder.png"  v-show="selected!='order'">
        <img slot="icon" src="../images/home_iconOrderSelected.png"  v-show="selected=='order'">
        订单
      </mt-tab-item>
      <mt-tab-item id="discover">
        <img slot="icon" src="../images/home_iconDiscover.png" v-show="selected!='discover'">
        <img slot="icon" src="../images/home_iconDiscoverSelected.png"v-show="selected=='discover'">
        发现
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../images/home_iconMine.png" v-show="selected!='mine'">
        <img slot="icon" src="../images/home_iconMineSelected.png" v-show="selected=='mine'">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    import { Tabbar, TabItem } from 'mint-ui';
    export default {
      name: "Home",
      data() {
        return {
          selected: '外卖'
        };
      },
      components: {
        mtTabbar:Tabbar,
        mtTabItem:TabItem
      }
    }
</script>

<style scoped>

</style>

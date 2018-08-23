<template>
  <div>
    <div class="menuBox" v-for="item in menuList">
      <p v-bind:class="['tabDef', { active: currentTab ===this }]" v-bind:key="id"  v-on:click="currentTab=this">{{item.name}}</p>

      <!--<div class="menuContent">-->
        <!--<p class="menuTitle">-->
          <!--<h5>{{item.name}}</h5>-->
          <!--<span>{{item.description}}</span>-->
          <!--<icon-more></icon-more>-->
        <!--</p>-->

        <!--<div class=""></div>-->

      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import  fetch  from '../fetch';
  import IconMore from "../componets/IconMore";

    export default {
      name: "Goods",
      data() {
        return {
          menuList:[],
          currentTab:0
        };
      },
      props: {
        shopid:Number||String
      },
      beforeMount(){
        this.getMenu();
      },
      methods:{
        getMenu(){
          console.log("shopid:"+this.shopid);
          fetch('shopping/v2/menu',{restaurant_id: this.shopid}).then(resp => {
            this.menuList= resp;
            console.log(this.menuList);
          })
        }
      },
      components: {
        IconMore:IconMore
      }
    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";


    .menuBox{
      //@include width-height($width,$height);
      @extend .box;
    }
    .tabDef{
      @include width-height(25%,5rem);
      @extend .border-btm;
      @extend .box;
      justify-content: $center;
      align-items: $center;
      color: $base-color*2;
    }
    .tab.active {
      @extend .bgc-white;
      border-left: 0.1rem solid $blue;
    }
    .tab:hover{
      background: #e0e0e0;
    }
    .menuContent{
      @extend .border;
      @extend .box;
      /*flex: 1;*/
      //height:12rem;
      box-sizing: border-box;
      @include width-height(76%,12em);
    }
  .menuTitle{
    height: 3rem;

  }




</style>

<template>
  <div>
    <div class="outerBox" >
      <!--<div class="menuLeft">-->
      <p v-for="item in menuList" v-bind:key="item.id" v-bind:class="['tabDef',{active: currentTab ===item.name }]" v-on:click="currentTab=item.name">{{item.name}}</p>
      <!--</div>-->

      <div class="menuBox"  v-for="item in menuList">
        <p class="menuTitle">
          <h5>{{item.name}}</h5>
          <span>{{item.description}}</span>
          <icon-gengduo class="icon-more"></icon-gengduo>
        </p>
        <p class="menuContent"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import  fetch  from '../fetch';
  import IconGengduo from "../componets/IconGengduo";

    export default {
      name: "Goods",
      data() {
        return {
          menuList:[],
          currentTab:''
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
            this.currentTab = this.menuList[0].name;
            console.log(this.menuList);
          })
        }
      },
      components: {
        IconGengduo:IconGengduo
      }
    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";


    .outerBox{
      position: relative;
      //overflow: hidden;
      //@extend .box;

    }
    /*.menuLeft{
      position: absolute;
      top: 0;
      left: 0;
      width: 25%;
      //flex: 1;
      @extend .box;
      flex-direction: column;

      justify-content: $center;
      align-items: $center;

    }*/
    .tabDef{
      @include width-height(25%,5rem);
      color: $base-color*2;
      /*height: 4rem;*/
      @extend .border-btm;
      @extend .box;
      flex-direction: column;
      justify-content: $center;
      align-items: $center;
    }
    .active{
      @extend .bgc-white;
      border-left: 0.2rem solid $blue;
    }
    .menuBox{
      //@extend .box,.border;

      flex: 1;
      /*width: 0;*/
      /*box-sizing: border-box;*/
      /*flex: 4;*/
      /*overflow-y: auto;*/
      position: absolute;
      top: 0;
      left: 25%;
    }
    .menuTitle{
      @extend .box,.border-btm;
      height: 3rem;
      align-items: center;

      &>h5{
        color: $base-color*2;
        font-size: 1.4rem;
        padding-left: 1rem;
      }
      &>span{
        color: $base-color*3;
        font-size: 1.2rem;
        flex: 1;
        padding-left: 1rem;
      }
      .icon-more{
        margin-right: 1rem;
      }
    }
    .menuContent{
      @extend .border;
      @include width-height($width,10rem);
    }




</style>

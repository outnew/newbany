<template>
  <div v-if="null!=shopInfo">

 <section class="shopHead">
      <header class="headTop">
        <nav class="back" v-on:click="goBack">
          <icon-back></icon-back>
        </nav>
        <div class="headImg">
          <img  v-if="shopInfo.image_path" :src="imgUrl+shopInfo.image_path" slot="icon" width="60" height="60">
        </div>
        <div class="headTitle">
          <p class="shopName bolder">{{shopInfo.name}}</p>
          <p class="description_text" v-if="shopInfo.piecewise_agent_fee">商家配送／{{shopInfo.float_minimum_order_amount}}分钟送达／{{shopInfo.piecewise_agent_fee.tips}}</p>
          <p class="ellipsis" v-if="shopInfo.promotion_info">公告：{{shopInfo.promotion_info}}</p>
        </div>

        <nav class="next">
          <icon-next></icon-next>
        </nav>
      </header>

      <footer class="headBtm" v-if="shopInfo.activities.length">
        <p class="discount ellipsis">
          <span v-if="shopInfo.activities[0]" class="tipsIcon" :style="{backgroundColor: '#' + shopInfo.activities[0].icon_color, borderColor: '#' + shopInfo.activities[0].icon_color}">{{shopInfo.activities[0].icon_name}}</span>
          <span>{{shopInfo.activities[0].description}}（APP专享）</span>
        </p>
        <p>{{shopInfo.activities.length}}个活动</p>
        <nav class="next">
          <icon-next></icon-next>
        </nav>
      </footer>

    </section>

    <section class="tabBox">
      <p  v-for="tab in tabs" >
        <span  v-bind:class="['tabTitle',{active: currentTab===tab}]" v-on:click="currentTab=tab">{{tab}}</span>
      </p>
    </section>

    <!--<section>-->
      <goods :shopid="id"></goods>
    <!--</section>-->

  </div>
</template>

<script>
  import  fetch  from '../fetch'
  import IconBack from "../componets/IconBack";
  import IconNext from "../componets/IconNext";
  import Goods from "./Goods";
    export default {
      name: "Seller",
      data(){
        return{
          shopInfo:null,
          imgUrl:'http://elm.cangdu.org/img/',
          id:'',
          tabs:['商品','评价'],
          currentTab:'商品'
        }
      },
      beforeMount(){
        this.id=this.$route.query.id;
        this.getShopInfo();
      },
      methods:{
        getShopInfo(){
          fetch('shopping/restaurant/'+this.id).then(resp => {
            this.shopInfo= resp;
            console.log(this.shopInfo);
          })
        },
        goBack: function (event) {
          this.$router.back(-1);
        }
      },
      components:{
        IconBack:IconBack,
        IconNext:IconNext,
        Goods:Goods
      }

    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";

  .shopHead{
    @include width-height($width,$height);
    background-color: #cccccc;

   .headTop,.headBtm{
     //@extend .border-btm;
     @extend .text-white;
       &{
         @extend .box;
         font-size: 1rem;
       }
   }
    .headTop{
      @include width-height($width,7rem);
      @extend .box;
      justify-content: $between;
      align-items: $center;

      .headTitle{
        @include width-height(66%,$height);
        //@extend .text-white;
        @extend .box;
        flex-direction: $column;
        justify-content: $around;
      }
      .shopName{
        font-size:180%;
      }
     }

    .headBtm{
      @include width-height(100%,2rem);
      justify-content: flex-start;
      align-items: $center;

      .tipsIcon{
        margin-left: 0.8rem;
        font-size: 1.5rem;
      }
      .next{
        margin-left: 1rem;
      }
      .discount{
        flex: 1;
      }
    }
  }

  .tabBox{
    @include width-height($width,3.5rem);
    @extend .box,.border-btm,.bgc-white;
    &>p{
      flex: 1;
      @extend .box;
      justify-content: $center;
      align-items: $center;
    }
  }
  .tabTitle{
    color: $base-color*2;
  }
  .active{
    border-bottom: 0.2rem solid $blue;
    color: $blue;
  }


</style>

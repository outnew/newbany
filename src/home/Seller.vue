<template>
  <div>
    <section class="shopHead">
      <header class="headTop">
        <nav class="back" v-on:click="goBack">
          <icon-back></icon-back>
        </nav>
        <div class="headImg"><img  v-if="shopInfo.image_path" :src="imgUrl+shopInfo.image_path" slot="icon" width="60" height="60"></div>
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
      <div class="tabTitle"><span class="goods">商品</span></div>
      <div class="tabTitle"><span class="evaluation">评价</span></div>
    </section>

    <article>
      <goods :shopid="id"></goods>
    </article>

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
          shopInfo:'',
          imgUrl:'http://elm.cangdu.org/img/',
          id:''
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
    @include width-height($width,3rem);
    @extend .box;
    @extend .bgc-white;
    .tabTitle{
      @extend .border-btm;
      flex: 1;
      @extend .box;
      justify-content: $center;
      align-items: $center;

      & span{
        border-bottom: 0.2rem solid red;
      }

    }

  }


</style>

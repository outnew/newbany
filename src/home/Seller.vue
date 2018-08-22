<template>
  <div>
    <section class="shopHead">
      <header class="headTop">
        <nav class="back">
          <icon-back></icon-back>
        </nav>

        <img  v-if="shopInfo.image_path" :src="imgUrl+shopInfo.image_path" slot="icon" width="60" height="60">

        <div>
          <p>{{shopInfo.name}}</p>
          <p class="description_text" v-if="shopInfo.piecewise_agent_fee">商家配送／{{shopInfo.float_minimum_order_amount}}分钟送达／{{shopInfo.piecewise_agent_fee.tips}}</p>
          <p class="description_promotion ellipsis" v-if="shopInfo.promotion_info">公告：{{shopInfo.promotion_info}}</p>
        </div>

        <nav class="next">
          <icon-next></icon-next>
        </nav>
      </header>

      <footer class="headBtm" v-if="shopInfo.activities.length">
        <p class="ellipsis">
          <span class="tip_icon" :style="{backgroundColor: '#' + shopInfo.activities[0].icon_color, borderColor: '#' + shopInfo.activities[0].icon_color}">{{shopInfo.activities[0].icon_name}}</span>
          <span>{{shopInfo.activities[0].description}}（APP专享）</span>
        </p>
        <p>{{shopInfo.activities.length}}个活动</p>

        <nav class="next">
          <icon-next></icon-next>
        </nav>
      </footer>

    </section>

  </div>
</template>

<script>
  import  fetch  from '../fetch'
  import IconBack from "../componets/IconBack";
  import IconNext from "../componets/IconNext";
    export default {
      name: "Seller",
      data(){
        return{
          shopInfo:'',
          imgUrl:'http://elm.cangdu.org/img/'
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
        }
      },
      components:{
        IconBack:IconBack,
        IconNext:IconNext
      }

    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";

  .border-top{
    border-top: 0.1rem solid #e4e4e4;
  }
  .border-right{
    border-right: 0.1rem solid #e4e4e4;
  }
  .border-btm{
     border-bottom: 0.1rem solid #e4e4e4;
  }
  .border-left{
    border-left: 0.1rem solid #e4e4e4;
  }

  .box{
    display: flex;
    flex-wrap: $isWrap;
  }
  .text-white{
    color:$base-color*5;
  }
  .bgc-white{
    background-color:$base-color*5;
  }
  $center:center;
  .mcCenter{
    justify-content: $center;
    align-items: $center;
  }

  .shopHead{
    @include width-height($width,$height);
   // @extend .text-white;
    background-color: #cccccc;

   .headTop,.headBtm{
     @extend .border-btm;
     &{
       //@extend .box;
     }
     .back,.next{
       //@include width-height($width/10,$height);
       @extend .box;
       @extend .mcCenter;

     }

   }

  }


</style>

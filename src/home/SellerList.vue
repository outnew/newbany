<template>
  <div>
    <router-link :to="{path: 'Seller', query:{id: item.id}}" class="sellerBox" v-for="item in sellerList" :key="item.id">
      <div class="sellerImg">
        <img :src="imgUrl+item.image_path" slot="icon" width="64" height="64">
      </div>
      <div class="sellerInfo">
        <section class="info">
          <div class="sellerName" :class="item.is_premium? 'premium': ''">{{item.name}}</div>
          <div class="supportsBox fsMin c6">
            <span v-for="item in item.supports" :key="item.id" class="supports">{{item.icon_name}}</span>
          </div>
        </section>
        <section class="info mSBcC bb_def" style="height: 2rem">
          <div class="grade">
            <span style="flex: 1">
            <icon-star :rating="item.rating"></icon-star>
              </span>
            <span style="color: #ff6000;">{{item.rating}}</span>
            <span class="saleNum" :class="item.rating_count? 'saleNum': ''">{{item.rating_count}}</span>
          </div>
          <div>
            <span v-if="item.delivery_mode" class="delivery">{{item.delivery_mode.text}}</span>
            <span class="onTime">{{zhunshi(item.supports)}}</span>
          </div >
        </section>

        <section class="info">
          <p>
            ¥{{item.float_minimum_order_amount}}起送
            <span class="segmentation">/</span>
            {{item.piecewise_agent_fee.tips}}
          </p>
          <p class="distance_time">
							<span v-if="Number(item.distance)">
                {{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}
								<span class="segmentation">/</span>
							</span>
            <span v-else>{{item.distance}}</span>
            <span class="segmentation">/</span>
            <span class="order_time" style="margin-right: 0.4rem;">{{item.order_lead_time}}</span>
          </p>
        </section>

      </div>
    </router-link>

  </div>
</template>

<script>
    import IconBase from "../componets/IconBase";
    import IconStar from "../componets/IconStar";
    import  fetch  from '../fetch'

    export default {
      name: "SellerList",
      components: {
        IconSvg:IconBase,
        IconStar:IconStar
      },
      data(){
          return{
            sellerList: [],
            latitude:'',
            longitude:'',
            imgUrl:'http://elm.cangdu.org/img/'
          }
      },
      mounted(){
        this.latitude=this.$route.query.latitude;
        this.longitude=this.$route.query.longitude;
        this.getSellerList();
        // console.log("safddnh");
      },
      methods:{
        getSellerList(){
          fetch('shopping/restaurants', {latitude:this.latitude,longitude:this.longitude}).then(resp => {
            this.sellerList = resp;
            console.log(this.sellerList);
          })
        },
        zhunshi(supports){
            let zhunStatus;
            //instanceof 类似typeof 通常来讲，使用 instanceof 就是判断一个实例是否属于某种类型。
            if ((supports instanceof Array) && supports.length) {
              supports.forEach(item => {
                if (item.icon_name === '准') {
                  zhunStatus = item.name;
                  // console.log(item.name);
                }
              })
            }else{
              zhunStatus = '';
            }
            return zhunStatus;
        }
      }


    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";
  .premium:before{
    content: '品牌';
    display: inline-block;
    background-color: #ffd930;
    padding: 0 0.1rem;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
  }
  .saleNum:before{
    content: '月售';
    display: inline-block;
    padding: 0 0.1rem;
  }
  .saleNum:after{
    content: '单';
    display: inline-block;
    padding: 0 0.1rem;
  }
  .sellerBox{
    @include width-height($width,$initial-px*6);
    @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
    @include box($direction,$isWrap,center,center,$flex);
    background-color: $base-color*5;
    .sellerImg{
       @include width-height($width/4,$height);
       //@include box($direction,$isWrap,center,center,$flex);
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: text-bottom;
     }
    .sellerInfo{
      flex: 1;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      .info{
        @include box($direction,$isWrap,space-between,center,$flex);
        @include font-face($normal,$normal,$initial-px,$familay);
        //@include border(border-bottom,$b-width,$b-style,$b-color,$radius);
        .sellerName{
          color: $base-color;
          @include font-face($normal,$bolder,$initial-px*0.8,$familay);
        }
        .supportsBox{
          display: flex;
          /*padding-right: 1rem;*/
              .supports{
                margin-right: 0.4rem;
                @include font-face($normal,$normal,$initial-px*0.8,$familay);
                color: $base-color*3;
              }
        }
        .grade{
          display: flex;
          justify-content:center;
          align-items: center;
          //@include box($direction,$isWrap,space-around,center,$flex);
          @include font-face($normal,$normal,$initial-px*0.8,$familay);
          & span{
            padding-right: 0.2rem;
          }
        }

        .delivery{
          font-size: 1rem;
          border-radius: 0.2rem;
          background-color: #26a2ff;
          color: $base-color*5;
        }
        .onTime{
          font-size: 1rem;
          border-radius: 0.2rem;
          margin-right: 1rem;
          border: 1px solid #26a2ff;
          color: #26a2ff;
        }
        .saleNum{
          display: flex;
        }
      }

    }
  }




</style>

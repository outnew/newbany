<template>
  <div>
    <section class="sellerBox" v-for="item in sellerList" :key="item.id">
      <div class="sellerImg">
        <img :src="imgUrl+item.image_path" slot="icon" width="64" height="64">
      </div>
      <div class="sellerInfo">
        <section class="infoT">
          <div class="sellerName" :class="item.is_premium? 'premium': ''">{{item.name}}</div>
          <div class="supportsBox fsMin c6">
            <span v-for="item in item.supports" :key="item.id" class="supports">{{item.icon_name}}</span>
          </div>
        </section>

        <section class="infoM mSBcC bb_def" style="height: 2rem">


          <section class="mSBcC">
            <span ><icon-star :rating="item.rating"></icon-star></span>
            <span style="color: #ff6000;">{{item.rating}}</span>
            <span class="c6">月售{{item.recent_order_num}}单</span>
          </section>
          <section>
            <span v-if="item.delivery_mode" style="background-color: #26a2ff;border-radius: 2px;" class="cFF fsMin">{{item.delivery_mode.text}}</span>
            <span style="margin-right: 10px;border: 1px solid #26a2ff;color: #26a2ff;border-radius: 2px;">{{zhunshi(item.supports)}}</span>
          </section >
        </section>

        <section class="infoB box c6 mSBcC">
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
            <span class="order_time" style="margin-right: 10px;">{{item.order_lead_time}}</span>
          </p>
        </section>

      </div>
    </section>

  </div>
</template>

<script>
    import IconBase from "../componets/IconBase";
    import IconStar from "../componets/IconStar";
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
          let requestConfig = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            mode: "cors",
            cache: "force-cache"
          };
          var req=new Request("https://elm.cangdu.org/shopping/restaurants?latitude="+this.latitude+"&longitude="+this.longitude,requestConfig);
          fetch(req).then(response=> {
            return response.json();
          }).then(resp => {
            console.log(resp);
            this.sellerList = resp;
          })
        },
        zhunshi(supports){
            let zhunStatus;
            //instanceof 类似typeof 通常来讲，使用 instanceof 就是判断一个实例是否属于某种类型。
            if ((supports instanceof Array) && supports.length) {
              supports.forEach(item => {
                if (item.icon_name === '准') {
                  zhunStatus = item.name;
                  console.log(item.name);
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
  .sellerBox{
    @include width-height($width,$initial-px*6);
    @include border(border-top,$b-width,$b-style,$b-color,$radius);
    @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
    @include box($direction,$isWrap,center,center,$flex);
    background-color: $base-color*5;
    .sellerImg{
       @include width-height($width/4,$height);
       @include box($direction,$isWrap,center,center,$flex);
     }
    .sellerInfo{
      flex: 1;

      .infoT{
        @include box($direction,$isWrap,space-between,center,$flex);
        @include width-height($width,$initial-px*2);
        @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
        .sellerName{
          color: $base-color;
          @include font-face($normal,$bolder,$initial-px*1.4,$familay);
        }
      }

    }
  }




</style>

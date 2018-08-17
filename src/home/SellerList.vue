<template>
  <div>
    <section style="width: 100%;height: 6rem;" class="box bb_def bgcFF" v-for="item in sellerList" :key="item.id">
      <div style="width: 25%;" class="box mcCenter">
        <img :src="imgUrl+item.image_path" slot="icon" width="64" height="64">
      </div>
      <div style="flex:1;" class="fsMin">
        <section class="box" style="height: 2rem;align-items: center;justify-content: space-between">
          <div class="br_def fontBold c3 fsCom" :class="item.is_premium? 'premium': ''">{{item.name}}</div>
          <div class="box fsMin c6">
            <section v-for="item in item.supports" :key="item.id" class="supports box" style="margin-right: 6px">{{item.icon_name}}</section>
          </div>
        </section>

        <section class="mSBcC bb_def" style="height: 2rem">
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

        <section class="box c6 mSBcC">
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

<style scoped>
  .premium:before{
    content: '品牌';
    display: inline-block;
    background-color: #ffd930;
    padding: 0 0.1rem;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
  }

</style>

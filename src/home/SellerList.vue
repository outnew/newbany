<template>
  <div>
    <section style="width: 100%;height: 6rem;" class="box bb_def bgcFF" v-for="item in sellerList" :key="item.id">
      <div style="width: 25%;" class="br_def box mcCenter">
        <img :src="imgUrl+item.image_path" slot="icon" width="64" height="64">
      </div>
      <div style="flex:1;">
        <section class="box bb_def" style="height: 2rem;align-items: center;justify-content: space-between">
          <div class="br_def fontBold c3 fsCom" :class="item.is_premium? 'premium': ''">{{item.name}}</div>
          <div class="box fsMin c6">
            <section v-for="item in item.supports" :key="item.id" class="supports box" style="margin-right: 3px">{{item.icon_name}}</section>
          </div>
        </section>

        <!--<section style="position: relative;overflow: hidden;">-->
          <!--&lt;!&ndash;<iconSvg icon-style="star-empty" icon-class="star" v-for="n in 5"></iconSvg>&ndash;&gt;-->
          <!--<div style="position: absolute;top: 0;left: 0rem;" :style="'width:' + rating*2/5 + 'rem'"><iconSvg icon-style="star-full" icon-class="star" v-for="n in 5" ></iconSvg></div>-->
         <!---->
        <!--</section>-->
        <section>
          <icon-star :rating="item.rating"></icon-star>
          <div>{{item.rating}}</div>
        </section>
        <section v-if="item.delivery_mode">{{item.delivery_mode.text}}</section>
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
          }
          var req=new Request("https://elm.cangdu.org/shopping/restaurants?latitude="+this.latitude+"&longitude="+this.longitude,requestConfig);
          fetch(req).then(response=> {
            return response.json();
          }).then(resp => {
            console.log(resp);
            this.sellerList = resp;
          })
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

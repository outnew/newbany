<template>
  <div style="position: relative">
    <mt-header fixed :title="locationName">
      <router-link to="/" slot="left">
        <mt-button icon="search"></mt-button>
      </router-link>
      <router-link to="Login" slot="right">登录|注册</router-link>
    </mt-header>

    <section class="swipe">
      <mt-swipe :auto="0" style="top:0;left:0;">
        <mt-swipe-item v-for="item in sortList">
          <div class="dataSwipe" v-for="i in item.arr">
            <img :src="i.img" slot="icon" width="32" height="32">
            <span>{{i.title}}</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </section>

    <section>
      <mt-cell title="附近商家" style="margin-top: 1rem;">
        <img slot="icon" src="../images/home_t_store.png" width="24" height="24">
      </mt-cell>
      <seller-list style="margin-bottom: 7rem"></seller-list>
      <!--<mt-cell v-for="seller in sellers"></mt-cell>-->
    </section>

  </div>
</template>

<script>
  import SellerList from './SellerList';

  export default {
    name: "Takeaway",
    data() {
      return {
        locationName: '',
        sortList: []
      };
    },
    mounted(){
      this.locationName =this.$route.query.location ;
      // this.latitude=this.$route.params.latitude;
      // this.longitude=this.$route.params.longitude;
      this.getSortList();
    },
    methods:{
      getSortList(){
        let requestConfig = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: "cors",
          cache: "force-cache"
        }
        var req=new Request("https://elm.cangdu.org/v2/index_entry",requestConfig);
        fetch(req).then(response=> {
          return response.json();
        }).then(resp => {

          console.log(resp);
          //分頁，2*8頁
          for(let i = 0 ;i<resp.length/8;i++) {
            let  tempArr = [];
            for (let j = 0;j<8;j++){
              tempArr.push({id:resp[i*8+j].id,title:resp[i*8+j].title,img:'https://fuss10.elemecdn.com'+resp[i*8+j].image_url})
            }
            this.sortList.push({arr:tempArr})
          }
          console.log(JSON.stringify(this.sortList))
        })
      }
    },
    components: {
      SellerList: SellerList
    }
  }
</script>

<style lang="scss">
@import "src/style/base";
  .swipe{
    @include width-height($width,10rem);
    margin-top: $initial-px*3.4;
    /*//background-color: $base-color*5;*/
  /*.swipeBox{*/
    /*display: flex;*/
    /*width: 100%;*/
    /*flex-wrap: wrap;*/
    /*box-sizing: border-box;*/
  /*}*/
    .dataSwipe{
      @include width-height($width/4,4rem);
      box-sizing: border-box;
     // @include box(column,wrap,center,center,$flex);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      /*flex: 1;*/
      //align-items: center;

    }
  }

  .mint-swipe-items-wrap > div {
    display: flex;
    flex-wrap: wrap;
  }
  .mint-swipe-items-wrap > div.is-active {
    display: flex;
    flex-wrap: wrap;
  }

</style>

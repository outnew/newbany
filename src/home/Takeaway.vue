<template>
  <div style="position: relative">
    <mt-header fixed :title="locationName">
      <router-link to="/" slot="left">
        <mt-button icon="search"></mt-button>
      </router-link>
      <router-link to="Login" slot="right">登录|注册</router-link>
    </mt-header>
    <div class="clear" style="height: 40px">&nbsp;</div>

    <section style="width: 100%;height: 10rem;">
      <mt-swipe :auto="5000" style="width: 100%;height: 10rem;top:0;left:0;" class="bb_def bgcFF">
        <mt-swipe-item v-for="item in sortList" >
          <div class="dataSl layoutCol mcCenter" v-for="i in item.row">
            <img :src="i.img" slot="icon" width="32" height="32">
            <span class="fsCom">{{i.title}}</span>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </section>

    <section>
      <mt-cell title="附近商家" style="margin-top: 10px;">
        <img slot="icon" src="../../images/home_t_store.png" width="24" height="24">
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
          //去重
          // console.log(resp);
          //分頁，2*8頁
          for(let i = 0 ;i<resp.length/8;i++) {
            let  tempArr = [];
            for (let j = 0;j<8;j++){
              tempArr.push({id:resp[i*8+j].id,title:resp[i*8+j].title,img:'https://fuss10.elemecdn.com'+resp[i*8+j].image_url})
            }
            this.sortList.push({row:tempArr})
          }
          // console.log("calc:"+JSON.stringify(this.sortList))
        })
      }
    },
    components: {
      SellerList: SellerList
    }
  }
</script>

<style scoped>
  .clear{
    clear: both;
  }
  .dataSl{
    box-sizing: border-box;
    width: 25%;
    /*border-bottom: 1px solid black;*/
    /*border-right: 1px solid black;*/
  }
  .mint-swipe-items-wrap > div {
    display: flex;
    flex-wrap: wrap;
  }
</style>

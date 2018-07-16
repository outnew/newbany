<template>
  <div>
    <section class="slNav bgc_nav mSBcC cFF">
      <div class="goBack" v-on:click="goback">&lt;</div>
      <div class="fontBold">{{gCity}}</div>
      <div class="changeCity" v-on:click="goback">切换城市</div>
    </section>

    <section class="searchBar bgcFF bt_def bb_def layoutCol" style="height: 5.5rem;">
      <!--<mt-search v-model="value" placeholder="输入学校、商务楼、地址" :autofocus="true" style="height: 3.3rem;"></mt-search>-->
      <!--<mt-button type="primary" size="large">提交</mt-button>-->
      <input type="text" placeholder="输入学校、商务楼、地址" class="ipt radius" v-model="value">
      <button class="btn bgc_nav radius cFF fontBold" v-on:click="getAddress">提交</button>
    </section>

    <ul>
      <li v-for="item in address" class="layoutCol bgcFF bt_def bb_def" style="line-height: 2rem;text-indent: 20px;">
        <p class="ellipsis" style="color: #333;">{{item.name}}</p>
        <p class="c9 ellipsis" >{{item.address}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  // import {Search} from 'mint-ui';
  // import {Button} from 'mint-ui';

    export default {
        name: "SearchLocation",
        data(){
          return {
            gCity:'',
            value:'',
            city_id:'',
            address:[]
          }
        },
        mounted(){
            // console.log(this.$route.params);
            this.gCity = this.$route.params.city;
            this.city_id = this.$route.params.id;
        },
        methods:{
            goback: function (event) {
              this.$router.back(-1);
            },
            getAddress(){
              console.log('getaddress');
              let requestConfig = {
                //Fetch 跨域请求时默认不带 cookie，需要时得手动指定 credentials: 'include'
                credentials: 'include',
                //Fecth 模拟表单提交
                method: 'GET',
                //Fecth 获取 HTTP 头信息
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                mode: "cors",
                cache: "force-cache"
              }

              var req=new Request("https://elm.cangdu.org/v1/pois?city_id="+this.city_id+"&keyword="+this.value+"&type=search",requestConfig);
              fetch(req).then(response=> {
                return response.json();
              }).then(resp=> {
                  this.address= resp;
                  console.log("asdasd:"+JSON.stringify(this.address))
              })
            }
        },
        components:{
          // Search,
          // Button
        }
    }
</script>

<style>
  .slNav{
    height: 3rem;
  }
  .searchBar{
    display: flex;
    align-items: center;
  }
  .ipt,.btn{
    height: 2rem;
    width: 90%;
    margin-top: 0.5rem;
    box-sizing: border-box;
  }
  .ipt{
    border: 1px solid #e4e4e4;
    padding-left: 0.5rem;
  }
  .bgc_nav{
    background-color: #3190e8;
  }
  .goBack{
    margin-left: 10px;
  }
  .changeCity{
    margin-right: 10px;
  }
  .searchBar{
    margin-top: 10px;
  }


</style>

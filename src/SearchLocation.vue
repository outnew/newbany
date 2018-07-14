<template>
  <div>
    <section class="slNav bgc_nav mSBcC cFF">
      <div class="goBack" v-on:click="goback">&lt;</div>
      <div class="fontBold">{{gCity}}</div>
      <div class="changeCity" v-on:click="goback">切换城市</div>
    </section>

    <section class="layoutCol">
      <search v-model="value" placeholder="输入学校、商务楼、地址"></search>
    </section>
    <ul>
      <li v-for="item in address">{{item.address}}</li>
    </ul>
  </div>
</template>

<script>
  import {  Search } from 'mint-ui';

    export default {
        name: "SearchLocation",
        data(){
          return {
            gCity:'',
            value:'',
            cityId:'',
            address:[]
          }
        },
        mounted(){
            // console.log(this.$route.params);
            this.gCity = this.$route.params.city;
            this.cityId = this.$route.params.id;
        },
        methods:{
            goback: function (event) {
              this.$router.back(-1);
            },
            getAddress(type){
              let requestConfig = {
                credentials: 'include',
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                mode: "cors",
                cache: "force-cache"
              }

              var req=new Request("https://elm.cangdu.org/v1/pois?city_id="+cityId+"&keyword="+value+"&type=search",requestConfig);
              // var req=new Request("https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search");
              fetch(req).then(response=> {
                return response.json();
              }).then(resp=> {
                  this.address= resp;

              })
            }
        },
        components:{Search}
    }
</script>

<style>
  .slNav{
    height: 2rem;
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


</style>

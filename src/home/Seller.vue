<template>
  <div>
    <mt-header :title='item.name' v-for="item in shopInfo">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
      <img :src="item.image_path" slot="icon" width="32" height="32">
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  </div>
</template>

<script>
  import  fetch  from '../fetch'
    export default {
      name: "Seller",
      data(){
        return{
          shopInfo:[]
        }
      },
      mounted(){
        this.latitude=this.$route.query.latitude;
        this.longitude=this.$route.query.longitude;
        this.name=this.$route.query.name;
        this.getShopInfo();
      },
      methods:{
        getShopInfo(){
          fetch('v4/restaurants', {geohash: this.latitude&this.longitude,keyword:this.name}).then(resp => {
            this.shopInfo= resp;

          })
        }
      }
    }
</script>

<style scoped>

</style>

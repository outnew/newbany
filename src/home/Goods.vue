<template>
  <div>
    <div v-for="item in  menuList.name" class=" ">
      <p>{{item}}</p>
    </div>
  </div>
</template>

<script>
  import  fetch  from '../fetch'
    export default {
      name: "Goods",
      data() {
        return {
          menuList:[],
          currentTab:0
        };
      },
      props: {
        shopid:Number||String
      },
      beforeMount(){
        this.getMenu();
      },
      methods:{
        getMenu(){
          console.log("shopid:"+this.shopid);
          fetch('shopping/v2/menu',{restaurant_id: this.shopid}).then(resp => {
            this.menuList= resp;
            console.log(this.menuList);
          })
        }
      }
    }
</script>

<style scoped>

</style>

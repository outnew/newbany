<template>
  <section class="shopcart">
    <icon-base icon-style="subtract" icon-class="subtract" ></icon-base>
    <p>{{count}}</p>
    <icon-base icon-style="add" icon-class="jiahao-24" ></icon-base>
  </section>
</template>

<script>
  import IconBase from "../../componets/IconBase";

    export default {
      name: "Shopcart",
      components: {
        IconBase:IconBase
      },
      data(){
        return{
          //count:[]
        }
      },
      props: ['shopid'],
      created(){
        // this.shopid=this.$route.query.id;
      },
      computed: {

        count () {
          return store.state.count;
        }
      },
      methods:{
        // increment () {
        //   store.commit('increment')
        // },
        // decrement () {
        //   store.commit('decrement')
        // }
      }
    }
</script>

<style lang="scss" scoped>
  .subtract{
    width: 1.5rem;
    height: 1.5rem;
    fill:white;
  }
  .add{
    width: 1.3rem;
    height: 1.3em;
    fill:white;
  }
</style>

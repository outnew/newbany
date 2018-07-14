<template>
  <div >
    <div>切换城市</div>
    <section class="slNav bgc_nav">
      <div>&lt;</div>
      <div>{{mCity}}</div>
    </section>
  </div>

</template>

<script>
    export default {
        name: "SearchLocation",
        data(){
          return {
            mCity:''
          }
        },
      mounted(){
          console.log(this.$route.params);
          this.mCity = this.$route.params.city;
      }
    }
</script>

<style>
  .slNav{
    height: 2rem;
  }
  .bgc_nav{
    background-color: #3190e8;
  }

</style>

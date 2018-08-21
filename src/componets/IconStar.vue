<template>
  <div >
    <section style="width: 4rem;height: 1rem;padding: 0">
      <iconSvg icon-style="star-empty" icon-class="star" v-for="n in 5"></iconSvg>
    </section>

    <div style="position: relative;overflow: hidden;top: -1rem;height: 1rem" :style="'width:'+rating*4/5+'rem'">
      <section style="width: 4rem;padding: 0">
        <iconSvg icon-style="star-full" icon-class="star" v-for="n in 5" ></iconSvg>
      </section>
    </div>

  </div>

</template>

<script>
  import IconBase from "../componets/IconBase";
    export default {
      name: "IconStar",
      components: {
        IconSvg:IconBase,
      },
      data(){
        return{

        }
      },
      props: {
        rating:Number
      },
      mounted(){
        // console.log("rating:"+this.rating*4/5)
      }
    }
</script>

<style scoped>
  .star_overflow{

  }
  .star-empty{
    width: 0.8rem;
    height: 0.8rem;
    fill: #bfcbd9;
  }
  .star-full{
    width: 0.8rem;
    height: 0.8rem;
    fill: orange;
  }


</style>

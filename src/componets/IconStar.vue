<template>
  <div>
    <section style="position: relative;overflow: hidden;">
      <iconSvg icon-style="star-empty" icon-class="star" v-for="n in 5"></iconSvg>
      <section :style="'width:' + rating*2/5 + 'rem'" class="absolute">
          <iconSvg icon-style="star-full" icon-class="star" v-for="n in 5" ></iconSvg>
      </section>
    </section>
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
          props:['rating']
        }
      }
    }
</script>

<style scoped>
  .star-empty{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: #bfcbd9;
    overflow: hidden;
  }
  .star-full{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: orange;
    overflow: hidden;
  }
  .absolute{
    position: absolute;
    top: 0;
    left: 0;
  }

</style>

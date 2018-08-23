<template>
  <div>
    <iconSvg icon-style="back" icon-class="back"></iconSvg>
  </div>
</template>

<script>
  import IconBase from "../componets/IconBase";
    export default {
      name: "IconBack",
      components: {
        IconSvg:IconBase
      }
    }
</script>

<style scoped>
  .back{
    width: 1.5rem;
    height: 1.5rem;
    fill:whitesmoke;
  }
</style>

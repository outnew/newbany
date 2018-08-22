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
    width: 1em;
    height: 1rem;
    fill:whitesmoke;
  }
</style>

<template>
  <div>
    <iconSvg icon-style="subtract" icon-class="subtract"></iconSvg>
  </div>
</template>

<script>
  import IconBase from "../componets/IconBase";
    export default {
      name: "IconSubtract",
      components: {
        IconSvg:IconBase
      }
    }
</script>

<style scoped>
  .subtract{
    width: 1.5rem;
    height: 1.5rem;
    fill:white;
  }
</style>

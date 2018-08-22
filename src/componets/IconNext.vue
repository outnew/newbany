<template>
    <iconSvg icon-style="next" icon-class="next"></iconSvg>
</template>

<script>
  import IconBase from "../componets/IconBase";
  export default {
      name: "IconNext",
      components: {
        IconSvg:IconBase
      }
    }
</script>

<style scoped>
  .next{
    width: 1rem;
    height: 1rem;
    fill:whitesmoke;
  }
</style>

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
    width: 1.5rem;
    height: 1.5rem;
    fill:whitesmoke;
  }
</style>

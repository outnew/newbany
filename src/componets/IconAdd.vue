<template>
  <div>
    <iconSvg icon-style="add" icon-class="jiahao-24"></iconSvg>
  </div>
</template>

<script>
  import IconBase from "../componets/IconBase";
    export default {
      name: "IconAdd",
      components: {
        IconSvg:IconBase
      }
    }
</script>

<style scoped>
  .add{
    width: 1.3rem;
    height: 1.3rem;
    fill:#3190e8;
  }
</style>

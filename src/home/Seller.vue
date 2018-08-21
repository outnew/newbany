<template>
  <div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <img src="" slot="icon">
      </router-link>
      <mt-button icon="next" slot="right"></mt-button>
    </mt-header>

  </div>
</template>

<script>
    export default {
        name: "Seller"
    }
</script>

<style scoped>

</style>

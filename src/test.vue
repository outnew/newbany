<template>
  <ul class="bAllDef mcCenter column">
    <li>123</li>
    <li>456</li>
    <li>789</li>
    <li>012</li>
    <li>345</li>
  </ul>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .mcCenter{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bAllDef{
    border: 1px solid black;
  }
  .column{
    flex-direction: column;
  }
</style>

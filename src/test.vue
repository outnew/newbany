<template>
  <div>
    <section>
      <ul  style="display:flex;width: 500px;flex-wrap: wrap">
        <li v-for="n in 12" style="width: 100px;height: 100px;box-sizing:border-box;border-bottom: 1px solid black;border-right: 1px solid black">{{n}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {Swipe,SwipeItem} from 'mint-ui';
    export default {
      name: "test",
      data(){
        return{

        }
      },
      components: {
        mtSwipe:Swipe,
        mtSwipeItem:SwipeItem
      }


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

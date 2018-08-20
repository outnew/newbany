<template>
  <div class="ul_container">
    颠三倒四
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

<style lang="scss" scoped>
  @import 'src/style/base';
  .ul_container{
    @include width-height($width, 35rem);
    @include font-face($normal,900,$initial-px,$familay);

  }
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
    border: 0.1rem solid black;
  }
  .column{
    flex-direction: column;
  }
</style>

<template>
  <div>
    <ul>
      <li class="box"><span>新品</span></li>
    </ul>
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

  *,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul{
    display: flex;
  }
 .box{
   width: 0px;
   height: 0px;
   border: 2rem solid transparent;
   border-bottom: 2rem solid red;
   transform: rotate(-45deg) ;
   //display: flex;
  // position: relative;
   //text-align: center;
   //transform: scale(0.8);
 }
  span{
    white-space: nowrap;
    font-size: 12px;
    //justify-content: center;
    //align-items: center;
    //transform: rotate(-60deg);
    transform: rotate(360deg) translate(-1.2rem,1rem);
   // position: absolute;
    //bottom: 0;
    //left: 0;
  }

</style>

<template>
  <div>
    <div class="outerBox">
      <ul class="menuLeft">
        <li  v-for="item in menuList" v-bind:key="item.id" v-bind:class="['tabDef',{active: currentTab ===item.name }]" v-on:click="currentTab=item.name">{{item.name}}</li>
      </ul>

      <section class="innerBox">
        <div class="menuBox"  v-for="menu in menuList">
          <div class="menuTitle">
            <strong>{{menu.name}}</strong>
            <span>{{menu.description}}</span>
            <icon-gengduo class="icon-more"></icon-gengduo>
          </div>

          <div class="menuContent" v-for="item in menu.foods">
            <section class="imgBox">
              <img  v-if="item.image_path" :src="imgUrl+item.image_path" slot="icon" width="40" height="40">
            </section>
            <section class="contentBox" style="flex: 1">
              <section style="height: 2rem;display: flex;justify-content: space-between;align-items: center">
                <strong>{{item.name}}</strong>
                <ul v-if="item.attributes.length" class="attributes_ul">
                  <li v-for="(attr,index) in item.attributes" :key="index" :style="{color:'#'+ attr.icon_color,borderColor: '#'+attr.icon_color}" :class="{attribute_new:attr.icon_name == '新'}">
                    <p :style="{color: attr.icon_name == '新'? '#fff' : '#' + attr.icon_color}">{{attr.icon_name=='新'?'新品':attr.icon_name}}</p>
                  </li>
                </ul>
              </section>
              <p class="description">{{item.description}}</p>
              <p class="sale">
                <span>月售{{item.month_sales}}份</span>
                <span>好评率{{item.satisfy_rate}}%</span>
              </p>
              <p v-if="item.activity" class="food_activity">
                <span :style="{color: '#' + item.activity.image_text_color,borderColor:'#' +item.activity.icon_color}">{{item.activity.image_text}}</span>
              </p>
              <footer class="detail_footer">
                <section class="food_price">
                  <span>¥{{item.specfoods[0].price}}</span>
                  <span v-if="item.specifications.length">起</span>
                </section>

                <!--<section class="shopcart">-->
                  <!--<icon-base icon-style="subtract" icon-class="subtract" @click="increment"></icon-base>-->
                  <!--<p>{{count}}</p>-->
                  <!--<icon-base icon-style="subtract" icon-class="jiahao-24" @click="decrement"></icon-base>-->
                <!--</section>-->
                <shopcart></shopcart>
              </footer>
            </section>



          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  import  fetch  from '../../config/fetch/index';
  import IconGengduo from "../../componets/IconGengduo";
  import IconBase from "../../componets/IconBase";
  import Shopcart from "./Shopcart";

    export default {
      name: "Goods",
      data() {
        return {
          menuList:[],
          currentTab:'',
          imgUrl:'//elm.cangdu.org/img/',
          //count: 0
        };
      },
      props: {
        shopid:Number||String
      },
      beforeMount(){
        this.getMenu();
      },
      computed: {
        // count () {
        //   return store.state.count;
        // }
      },
      methods:{
        getMenu(){
          console.log("shopid:"+this.shopid);
          fetch('shopping/v2/menu',{restaurant_id: this.shopid}).then(resp => {
            this.menuList= resp;
            this.currentTab = this.menuList[0].name;
            console.log(this.menuList);
          })
        },
        // increment () {
        //   store.commit('increment')
        // },
        // decrement () {
        //   store.commit('decrement')
        // }
      },
      components: {
        IconGengduo:IconGengduo,
        //IconAdd:IconAdd,
        //IconSubtract:IconSubtract,
        IconBase:IconBase,
        Shopcart:Shopcart
      }
    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";

  @mixin sc($size, $color){
    font-size: $size;
    color: $color;
  }

  .outerBox{
    position: relative;
    //overflow: hidden;
  }
  .menuLeft{
    width: 25%;
    box-sizing: border-box;
  }
  .tabDef{
    //@include width-height(25%,5rem);
    @include width-height($width,5rem);
    color: $base-color*2;
    @extend .border-btm,.box;
    flex-direction: column;
    justify-content: $center;
    align-items: $center;
  }
  .active{
    @extend .bgc-white;
    border-left: 0.2rem solid $blue;
    font-weight: bolder;
  }

  .innerBox{
    //@extend .box,.border;
    position: absolute;
    top: 0;
    left: 25%;
    width: 75%;
    box-sizing: border-box;
  }
    .menuTitle{
      @extend .box;
      @include width-height($width,3.5rem);
      align-items: center;

      &>strong{
        color: $base-color*2;
        padding-left: 1rem;
      }
      &>span{
        color: $base-color*3;
        flex: 1;
        padding-left: 0.6rem;
      }
      .icon-more{
        margin-right: 1rem;
      }
    }
    .menuContent{
      @extend .border-btm,.bgc-white,.box;
      //@include width-height($width,10rem);
      position: relative;
      overflow: hidden;
      padding: 0.5rem 0.2rem;

      .imgBox{
        width: 25%;
        & img{
          margin: 0.8rem;
        }
      }

      .attributes_ul{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 2rem;
        li{
          font-size: 1rem;
          height: 1rem;
          line-height: 1rem;
          border: 1px solid #666;
          border-radius: 0.3rem;
          transform: scale(0.8);
          p{
            white-space: nowrap;
          }
        }
        .attribute_new{
          position: absolute;
          top: 0;
          left: 0;
          background-color: #4cd964;
          @include width-height(3.6rem, 3.6rem);
          display: flex;
          align-items: flex-end;
          transform: rotate(-45deg) translate(0rem, -2.5rem);
          border: none;
          border-radius: 0;
          p{
            @include sc(.4rem, #fff);
            text-align: center;
            flex: 1;
          }
        }
      }

      .contentBox{
        flex: 1;
      }
      .description{
        color:$base-color*3;
        font-size: 1rem;
      }
      .sale{
        color:$base-color;
        font-size: 1rem;
      }
      .food_activity{
        line-height: .5rem;
        padding-top: 0.2rem;
        span{
          font-size: .3rem;
          border: 1px solid currentColor;
          border-radius: 0.3rem;
          padding: .08rem;
          display: inline-block;
          transform: scale(.9);
          margin-left: -0.35rem;

        }
      }
      .detail_footer{
        height: 3rem;
        @extend .box;
        justify-content: space-between;
        align-items: center;
      }
      .food_price{
        font-size: .7rem;
        color: #f60;
        font-weight: 700;
        margin-right: .3rem;
      }
      .shopcart{
        @extend .box;
      }
    }





</style>

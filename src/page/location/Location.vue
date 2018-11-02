<template>
  <div id="app">
    <section>
      <header class="head">
        <div class="headLogo">ele.me</div>
        <div>
          <router-link to="/login" class="headLogin">登录</router-link>
          <span class="sign">|</span>
          <router-link to="/login" class="headRegister">注册</router-link>
        </div>
      </header>

      <nav class="cityNav">
        <div class="cityTips">
          <span class="cityTipsL">当前定位城市：</span>
          <span class="cityTipsR">定位不准时，请在城市列表中选择</span>
        </div>

        <router-link :to="{ name: 'searchLocation', query: { city: guessCity.name,id:guessCity.id ,latitude:guessCity.latitude,longitude:guessCity.longitude}}"  class="guessCity">
          <span class="guessCityName">{{guessCity.name}}</span>
          <span class="iconArrow">&gt;</span>
        </router-link>
      </nav>
    </section>

    <section class="hotCityBox">
      <h5 class="titleHotCity">热门城市</h5>
      <div class="hotCity">
        <router-link :to="{ name: 'searchLocation', query: { city: item.name,id:item.id,latitude:item.latitude,longitude:item.longitude}}" v-for="item in hotCity" :key="item.id"  class="dataHotCity">{{item.name}}</router-link>
      </div>
    </section>

    <!--v-for 支持遍历对象  v-for="(val, key, index) in group" value:元素，key:属性，index:下标  -->
    <!--支持以computed下的数据源-->
    <section v-for="(val, key) in sortGroup" :key="key" class="sortGroup">
      <h5 class="titleSortCity">{{key}}</h5>
      <div class="sortCity">
        <router-link :to="{ name: 'searchLocation', query: { city: item.name,id:item.id,latitude:item.latitude,longitude:item.longitude }}"  v-for="item in val" class="dataSortCity">{{item.name}}</router-link>
      </div>
    </section>


  </div>
</template>

<script>
  import  fetch  from '../../config/fetch/index'
  export default {
    name: 'Location',
    data() {
      return {
        guessCity: [],
        hotCity: [],
        group: []
      }
    },
    beforeMount() {
      this.getCity('guess');
      this.getCity('hot');
      this.getCity('group');
    },
    methods: {
      getCity(type) {
        fetch('v1/cities', {type: type}).then(resp => {
          console.log('resp')
          if (type == "guess") {
            this.guessCity = resp;
          } else if (type == "hot") {
            this.hotCity = resp;
          } else {
            this.group = resp;
          }
        })

      }
    },
    computed: {
        // 对数组进行排序  依次A-Z
        sortGroup() {
          let sortobj = {};
          for (let i = 65; i <= 90; i++) {
            // A-Z ASCII 值依次是 65-90
            if (this.group[String.fromCharCode(i)]) {
              //等同于 this.group[A]  this.group[B] this.group[C]  .........
              sortobj[String.fromCharCode(i)] = this.group[String.fromCharCode(i)];
              //等同于 sortobj[A] = this.group[A]  sortobj[B] = this.group[B] .......  依A-Z顺序往sort对象中添加数据
            }
          }
          return sortobj;//返回sort 在v-for中使用
        }
    }
  }


</script>
<style lang="scss">
  @import "src/style/base";

  .head{
    background-color: $blue;
    position: fixed;
    left: 0;
    top: 0;
    @include box($direction,$isWrap,space-between,center,$flex);

      .headLogo,.headLogin,.sign,.headRegister {
        color: $base-color*5;
      }
  }
  .head,.cityTips,.guessCity, .titleHotCity,.dataHotCity,.titleSortCity,.dataSortCity{
    @include width-height($width,$initial-px*3);
  }
  .headLogo,.cityTipsL,.guessCityName,.titleHotCity,.titleSortCity{
    @include padding(padding-left,$initial-px);
  }
  .headRegister,.cityTipsR,.iconArrow{
    @include padding(padding-right,$initial-px);
  }

  .cityNav{
    margin-top: $initial-px*3;

      & .cityTips,.guessCity{
        @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
        @include box($direction,$isWrap,space-between,center,$flex);
        background-color: $base-color*5;
      }
      & .cityTips{
          .cityTipsL{
            color: $base-color*2;
            @include font-face($normal,$normal,$initial-px*1.2,$familay);
          }
          .cityTipsR{
            color: $base-color+#6C6C6C;
            @include font-face($normal,$bolder,$initial-px*1.2,$familay);
          }
      }
      & .guessCity{
        @include font-face($normal,$normal,$initial-px*1.6,$familay);
      }
  }
  .guessCityName,.dataHotCity{
    color: $blue;
  }
  .hotCityBox,.sortGroup{
    margin-top: $initial-px;
    background-color: $base-color*5;
    color: $base-color*2;
    @include width-height($width,$height);
    @include border(border-top,$b-width,$b-style,$b-color,$radius);

      .titleHotCity,.titleSortCity{
        line-height: $initial-px*3;
        @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
      }
      .hotCity,.sortCity{
        display: flex;
        flex-wrap: wrap;
      }
      .dataHotCity,.dataSortCity{
        width: $width/4;
        box-sizing: border-box;
        @include border(border-right,$b-width,$b-style,$b-color,$radius);
        @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
        text-align: center;
        line-height: $initial-px*3;
        @extend .ellipsis;
      }
      .dataSortCity{
        color: $base-color*2;
      }

  }

</style>



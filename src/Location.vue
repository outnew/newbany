<template>
  <div id="app">
    <section class="layoutCol hidden bgcFF">
      <header class="headNav mLcC cFF">
        <span class="head_logo">ele.me</span>
        <div>
          <router-link to="/login" class="head_login cFF">登录</router-link>
          <span>|</span>
          <router-link to="/login" class="head_register cFF">注册</router-link>
        </div>
      </header>

      <div class="guessCity bb_def mcCenter c6 fsMin">
        <span class="tipsLocation">当前定位城市：</span>
        <span class="tips fontBold">定位不准时，请在城市列表中选择</span>
      </div>

      <router-link :to="{ name: 'searchLocation', params: { city: guessCity.name,id:guessCity.id }}"  class="location bb_new mcCenter">
        <span class="currentCity c31">{{guessCity.name}}</span>
        <span class="icon_arrow">&gt;</span>
      </router-link>
    </section>

    <section class="hotCity layoutCol bgcFF c6">
      <h5 class="titleHC bt_def bb_def ti box" style="align-items: center">热门城市</h5>
      <div class="mcCenter wrap">
        <router-link :to="{ name: 'searchLocation', params: { city: item.name,id:item.id }}" v-for="item in hotCity" :key="item.id"  class="mcCenter dataHC bb_def br_def c31">{{item.name}}</router-link>
      </div>
    </section>

    <!--v-for 支持遍历对象  v-for="(val, key, index) in group" value:元素，key:属性，index:下标  -->
    <!--支持以computed下的数据源-->
    <section v-for="(val, key) in sortGroup" :key="key" class="sortCity bgcFF layoutCol">
      <h5 class="titleSG bt_def br_def bb_def ti" style="line-height: 3rem">{{key}}</h5>
      <div class="box fsCom wrap" style="width: 100%;">
        <router-link :to="{ name: 'searchLocation', params: { city: item.name,id:item.id }}"  v-for="item in val" class="dataSG bb_def br_def ellipsis c6" style="line-height: 3rem">{{item.name}}</router-link>
      </div>
    </section>


  </div>
</template>

<script>
  export default {
    name: 'Location',
    components: {

    },
    data() {
      return{
        guessCity: [],
        hotCity: [],
        group: []
      }
    },
    beforeMount(){
      this.getCity('guess');
      this.getCity('hot');
      this.getCity('group');
    },
    methods:{
      getCity(type){
      let requestConfig = {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: "cors",
        cache: "force-cache"
      }

      var req=new Request("http://elm.cangdu.org:8001/v1/cities?type="+type,requestConfig);
      fetch(req).then(response=> {
        return response.json();
      }).then(resp=> {
        if(type=="guess"){
          this.guessCity = resp;
        }else if(type=="hot"){
          this.hotCity = resp;
        }else{
          this.group = resp;
        }
      })
    }
  },
    computed:{
      // 对数组进行排序  依次A-Z
      sortGroup(){
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
<style>
  .head_logo,.tipsLocation,.currentCity{
    margin-left: 10px;
    flex:1;
  }
  .head_register,.tips,.icon_arrow{
    margin-right:10px;
  }
  .headNav,.guessCity,.location,.titleHC,.dataHC,.titleSG,.dataSG{
    height: 3rem;
  }

  /*1行4列表格*/
  .dataHC,.dataSG{
    width: 25%;
    box-sizing: border-box;
  }
  .dataSG{
    text-align: center
  }
</style>



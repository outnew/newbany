<template>
  <div id="app">
    <section class="layoutCol hidden bgcFF">
      <header class="head mLcC cFF">
        <span class="head_logo">ele.me</span>
        <a href="" class="head_login cFF">登录</a>
        <span>|</span>
        <a href="" class="head_register cFF">注册</a>
      </header>
      <div class="guessCity bb_def mcCenter c6 fsMin">
        <span class="tipsLocation">当前定位城市：</span>
        <span class="tips fontBold">定位不准时，请在城市列表中选择</span>
      </div>
      <div class="location bb_new mcCenter">
        <!--<span class="currentCity c31">{{guessCity.name}}</span>-->
        <!--<router-link :to="'/searchLocation/'+guessCity.name">{{guessCity.name}}</router-link>-->
        <router-link  :to="{ name: 'searchlocation', params: { city: guessCity.name,id:guessCity.id }}" class="currentCity c31">{{guessCity.name}}</router-link>
        <span class="icon_arrow">&gt;</span>
      </div>
    </section>


    <section class="hotCity layoutCol bgcFF c6">
      <h5 class="titleHC bt_def bb_def ti box" style="align-items: center">热门城市</h5>
      <ul class="mcCenter wrap">
        <li v-for="item in hotCity" :key="item.id" class="mcCenter dataHC bb_def br_def c31">{{item.name}}</li>
      </ul>
    </section>

    <!--v-for 支持遍历对象  v-for="(val, key, index) in group" value:元素，key:属性，index:下标  -->
    <!--支持以computed下的数据源-->
    <section v-for="(val, key, index) in sortGroup" :key="key" class="sortCity c31 bgcFF layoutCol">
      <h5 class="titleSG bt_def br_def bb_def ti" style="flex: 1;">{{key}}</h5>
      <ul class="box" style="flex-wrap: wrap;width: 100%;font-size: 14px;line-height: 3rem">
        <li class="dataSG bb_def br_def ellipsis" style="text-align: center"  v-for="item in val">{{item.name}}</li>
      </ul>
    </section>


  </div>
</template>height: 1.75rem;

<script>
  export default {
    name: 'App',
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
        credentials: 'include',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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
          // this.groupObjtoArray(resp);
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
            //等同于 sortobj[A] = this.group[A]  sortobj[A] = this.group[B] .......  依A-Z顺序往sort对象中添加数据
          }
        }
        return sortobj;//返回sort 在v-for中使用
      },
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
  .head,.guessCity,.location,.titleHC,.dataHC,.titleSG,.dataSG{
    height: 3rem;
  }

  /*1行4列表格*/
  .dataHC,.dataSG{
    width: 25%;
    box-sizing: border-box;
  }
</style>



<template>
  <div>
    <header class="slNav">
      <div class="goBack" v-on:click="goBack">&lt;</div>
      <div class="gCity">{{gCity}}</div>
      <div class="changeCity" v-on:click="goBack">切换城市</div>
    </header>

    <section class="searchBar">
      <input type="search" placeholder="输入学校、商务楼、地址" class="ipt" v-model="value">
      <button  v-on:click="getAddress" class="btn">提交</button>
    </section>

    <section class="records">
      <h5 class="recordsTitle" v-show="show">搜索历史</h5>
      <div v-for="item in address" class="recordsList" v-on:click="setStorage(item)">
        <p class="recordsName">{{item.name}}</p>
        <p class="recordsAddress">{{item.address}}</p>
      </div>
      <button class="clearAll" v-on:click="clear" v-show="address&&address.length>0&&show" style="margin-bottom: 22rem">清空所有</button>
    </section>

  </div>
</template>

<script>
  import  fetch  from '../fetch'
    export default {
      name: "SearchLocation",
      data() {
        return {
          gCity: '',
          value: '',
          city_id: '',
          address: [],
          show:false
        }
      },
      mounted() {
        this.gCity = this.$route.query.city;
        this.city_id = this.$route.query.id;
        this.address = JSON.parse(localStorage.getItem("currentAddress"));
        // console.log(this.address);
        this.show=this.address&&this.address.length>0;
      },
      methods: {
        goBack: function (event) {
          this.$router.back(-1);
        },
        getAddress() {
          fetch('v1/pois',{city_id:this.city_id,keyword:this.value,type:'search'}).then(resp => {
            this.address = resp;
            // console.log(JSON.stringify(this.address))
          })
        },
        clear(){
          localStorage.removeItem("currentAddress");
          this.address = JSON.parse(localStorage.getItem("currentAddress"));
        },
        setStorage(item) {
          // console.log(item);
          if (window.localStorage) {
            //localStorage.setItem()存储JSON对象方法：存储前先用JSON.stringify()将json对象转换成字符串形式, JSON.stringify()可以将任意的JavaScript值序列化成JSON字符串
            var storage_= JSON.parse(localStorage.getItem("currentAddress"));//JSON.parse()将一个JSON字符串转换为对象
            var isStorageNULL = storage_ == "" || storage_ == undefined || storage_ == null;  //判断字符串类型，typeof()？
            storage_=isStorageNULL?[]:storage_;
            storage_.push(item);
            for(var i = 0; i < storage_.length; i++){
              for(var j = i + 1; j < storage_.length; j++){
                if(storage_[i].name ==storage_[j].name){
                  storage_.splice(j,1);
                  j--;
                }
              }
            }
            localStorage.setItem("currentAddress",JSON.stringify(storage_));
            this.$router.push({ name: 'Home', query: {location: item.name }})
          }else{
            // document.getElementById("result").innerHTML = "抱歉！您的浏览器不支持 Web Storage ...";
          }
        },
      },
      components: {
        // Search,
        // Button
      }
    }
</script>

<style lang="scss" scoped>
  @import "src/style/base";

  .slNav{
    @include width-height($width,$initial-px*3);
    background-color: $blue;
    color: $base-color*5;
    @include box($direction,$isWrap,space-between,center,$flex);

    .gCity{
      @include font-face($normal,$bolder,$initial-px*1.6,$familay);
    }
    .goBack{
      margin-left: $initial-px;
    }
    .changeCity{
      margin-right: $initial-px;
      @include font-face($normal,$normal,$initial-px*1.2,$familay);
    }
  }
  .searchBar{
    @include width-height($width,$initial-px*6);
    margin-top: $initial-px;
    display: flex;
    align-items: center;
    background-color: $base-color*5;
    @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
    @include border(border-top,$b-width,$b-style,$b-color,$radius);
    @include box(column,$isWrap,space-around,center,$flex);

    .ipt,.btn{
      @include width-height(90%,$initial-px*2);
    }
    .ipt{
      border: 1px solid #e4e4e4;
      text-indent: 0.5rem;
    }
    .btn{
      background-color: $blue;
      color: $base-color*5;
      font-weight: bold;
      border-radius: $initial-px*0.2;
      margin-top: -0.8rem;
    }
  }
  .records{
    font-size: 1.2rem;
    .recordsTitle{
      @include width-height($width,$initial-px*1.5);
      @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
      @include border(border-top,$b-width,$b-style,$b-color,$radius);
      padding-left: $initial-px;
      text-align: left;
      line-height: $initial-px*1.5;
      color: $base-color;

    }
    .recordsList,.clearAll{  background-color: $base-color*5;}
    .recordsList{
      @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
      @include box(column,$isWrap,space-around,left,$flex);
      padding-left: $initial-px;
      @include width-height($width,$initial-px*5);

      .recordsAddress{
        color: $base-color*3;
      }
    }
    .recordsName,.clearAll{
      color: $base-color;
    }
    .clearAll{
      @include width-height($width,$initial-px*4);
      flex: 1;
      @include border(border-bottom,$b-width,$b-style,$b-color,$radius);
    }
  }


</style>

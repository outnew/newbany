<template>
  <div>
    <section class="slNav bgc_nav mSBcC cFF">
      <div class="goBack" v-on:click="goback">&lt;</div>
      <div class="fontBold">{{gCity}}</div>
      <div class="changeCity" v-on:click="goback">切换城市</div>
    </section>

    <section class="searchBar bgcFF bt_def bb_def layoutCol" style="height: 5.5rem;">
      <!--<mt-search v-model="value" placeholder="输入学校、商务楼、地址" :autofocus="true" style="height: 3.3rem;"></mt-search>-->
      <!--<mt-button type="primary" size="large">提交</mt-button>-->
      <input type="search" placeholder="输入学校、商务楼、地址" class="ipt radius" v-model="value">
      <button class="btn bgc_nav radius cFF fontBold" v-on:click="getAddress">提交</button>
    </section>

    <section>
      <h5 class="bt_def bb_def" style="text-indent: 20px;">搜索历史</h5>
      <ul>
        <li v-for="item in address" class="layoutCol bgcFF bt_def bb_def" style="text-indent: 20px;" v-on:click="setStorage(item)">
          <p class="ellipsis fsPri" style="color: #333;padding-top: 5px;margin-bottom: 5px;">{{item.name}}</p>
          <p class="c9 ellipsis fsMin" style="padding-bottom: 5px;">{{item.address}}</p>
        </li>
      </ul>
      <button class="clearAll bgcFF c9" v-on:click="clear"  v-show="false">清空所有</button>
    </section>


  </div>
</template>

<script>
  // import {Search} from 'mint-ui';
  // import {Button} from 'mint-ui';

    export default {
      name: "SearchLocation",
      data() {
        return {
          gCity: '',
          value: '',
          city_id: '',
          address: []
        }
      },
      mounted() {
        // console.log(this.$route.params);
        this.gCity = this.$route.params.city;
        this.city_id = this.$route.params.id;
        this.address = JSON.parse(localStorage.getItem("currentAddress"));
      },
      methods: {
        goback: function (event) {
          this.$router.back(-1);
        },
        getAddress() {
          console.log('getaddress');
          let requestConfig = {
            //Fetch 跨域请求时默认不带 cookie，需要时得手动指定 credentials: 'include'
            credentials: 'include',
            //Fecth 模拟表单提交
            method: 'GET',
            //Fecth 获取 HTTP 头信息
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            mode: "cors",
            cache: "force-cache"
          }

          var req = new Request("https://elm.cangdu.org/v1/pois?city_id=" + this.city_id + "&keyword=" + this.value + "&type=search", requestConfig);
          fetch(req).then(response => {
            return response.json();
          }).then(resp => {
            this.address = resp;
            console.log(JSON.stringify(this.address))
          })
        },
        clear() {
          this.address = [];
        },
        setStorage(item) {
          console.log(item);
          if (window.localStorage) {
            //localStorage.setItem()存储JSON对象方法：存储前先用JSON.stringify()将json对象转换成字符串形式, JSON.stringify()可以将任意的JavaScript值序列化成JSON字符串
            var storage_=localStorage.getItem("currentAddress");
            console.log("storage:"+storage_);
            var isStorageNULL = storage_ == "" || storage_ == undefined || storage_ == null
            storage_=isStorageNULL?[]:storage_;
            console.log("item:"+item);
            storage_.push(item);
            localStorage.setItem("currentAddress",JSON.stringify(storage_));
          } else {
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

<style>
  .slNav{
    height: 3rem;
  }
  .searchBar{
    display: flex;
    align-items: center;
  }
  .ipt,.btn{
    height: 2rem;
    width: 90%;
    margin-top: 0.5rem;
    box-sizing: border-box;
  }
  .ipt{
    border: 1px solid #e4e4e4;
    padding-left: 0.5rem;
  }
  .bgc_nav{
    background-color: #3190e8;
  }
  .goBack{
    margin-left: 10px;
  }
  .changeCity{
    margin-right: 10px;
  }
  .searchBar{
    margin-top: 10px;
  }
  .clearAll{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    flex: 1;
  }

</style>

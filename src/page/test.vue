<template>
  <div>
    <input type="text" v-model="value">
    <h4>{{value}}</h4>
    <h4>{{text}}</h4>
    <button v-on:click="changeText">changeText</button>
  </div>
</template>

<script>

    export default {
      name: "test",
      data(){
        return{
            text:"Vue双向绑定",
            value:"Hello，妥妥"
        }
      },
      methods:{
        changeText:function () {
          this.text="Baby，Mami love you"
        }
      },
      mounted:function ()  {
        window.setTimeout(()=>{
          this.text='稳稳，你好帅'
        },1000)
      }


    }

    // $(document).ready(function () {
    //   $("li").css({"width":"100px","height":"50px","color":"white"});
    //   $("li:even").css("background-color","red");
    //   $("li:odd").css("background-color","pink");
    // })


</script>

<style>
  /*@import 'src/style/base';*/

  *,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h4{
    width: 20rem;
    height: 2rem;
  }
  input,button{
    width: 20rem;
    height: 2rem;
    border: 1px solid black;
  }


</style>

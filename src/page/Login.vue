<template>
  <div id="app">
    <section class="slNav bgc_nav mSBcC cFF">
      <div class="goBack" v-on:click="goback">&lt;</div>
      <h3 class="titleLogin ">登录</h3>
    </section>
    <form  @submit="checkForm" method="post">
      <section style="margin-top: 12px">
        <input type="phone" name="value" placeholder="账号" v-model="phoneNum" maxlength="11"  class="userAccount bb_def bgcFF">
      </section>
      <section>
        <input type="password" name="value" placeholder="密码" v-model="password" min="6" max="18" class="password bb_def bgcFF">
      </section>
      <section>
        <input type="text" name="value" placeholder="验证码" v-model="captcha" maxlength="4" class="captcha_code bgcFF">
      </section>
      <section>
        <div class="cDan tipsLogin fsMin layoutCol">
          <p  style="padding: 10px 0;">温馨提示：未注册过的账号，登录时将自动注册</p>
          <p style="padding-bottom: 10px">注册过的用户可凭账号密码登录</p>
        </div>
      </section>
      <section>
        <button class="btnLogin radius cFF fontBold" type="submit">登录</button>
      </section>
    </form>

  </div>
</template>

<script>
    export default {
      name: "Login",
      data(){
        return {
          show: false,
          phoneNum:"",
          password:"",
          captcha:"",
          showAlert:false
        }
      },
      methods:{
        goback: function (event) {
          this.$router.back(-1);
        },
        checkForm: function () {
          var rightPhoneNum=/^1[356789]\d{9}$/g.test(this.phoneNum);
          var rightPassword=/^[a-zA-Z]\w{5,17}$/.test(this.password);
          var rightCaptcha=/^\d{4}/.test(this.captcha);
          if(!rightPhoneNum){
            alert("请输入正确的手机号！")
            return
          }
          if(!rightPassword){
            alert("请输入6-18英文字母/数字/下划线组合！")
           return
          }
          if(!rightCaptcha){
            alert("请输入正确的验证码！")
            return
          }

        }
      }
    }
</script>

<style scoped>
  .titleLogin{
    flex: 1;
    text-align: center;
  }
  .userAccount,.password,.captcha_code{
    height: 3rem;
    width: 100%;
    flex-direction: column;
    text-indent: 20px;
    font-size: 18px;
  }
  .btnLogin{
    /*box-sizing: border-box;*/
    background-color: #4cd964;
    height: 3rem;
    width: 90%;
    margin-left: 5%;
    /*margin-top: 2rem;*/
    box-sizing: border-box;
  }
  .tipsLogin{
    text-indent: 20px;
  }

</style>

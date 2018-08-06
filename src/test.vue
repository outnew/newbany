<template>
  <ul class="bAllDef mcCenter column">
    <ul>
      <li>123</li>
      <li>456</li>
    </ul>
  </ul>
</template>

<script>
    export default {
      name: "test",
     mounted(){
        var arr = [8,6,9,7,6,1,6,5,6,8,9,2];
        for(var i=0;i<arr.length;i++){
          for(var j=i+1;j<arr.length;j++){
            console.log("i:"+i+"__j"+j+"____arri"+arr[i]+"__arrj"+arr[j]);
            if(arr[i]==arr[j]){
              arr.splice(j,1);  			//从自身开始数
              j--;						//j--保证重复2次以上的元素不被遗漏
            }
          }
        }
        console.log(arr);
    }



    }

</script>

<style scoped>
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
    border: 1px solid black;
  }
  .column{
    flex-direction: column;
  }
</style>

/**
 * created by zww on 2018/8/20
 */
'use strict';
let baseUrl = "http://elm.cangdu.org/";

export  default  async(url,data,type="GET",method='fetch')=>{
  type = type.toUpperCase();
  url = baseUrl + url;

  //默认配置
  let requestConfig = {
    method: type,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    mode: "cors",
    cache: "force-cache"
  }

  if (type == 'GET') {
    if (data!=null) {
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
        console.log(dataStr);
      })
      if (dataStr!== ''){
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
        console.log(url);
      }
    }
  }
  console.log(url);
  const response = await fetch(url, requestConfig);
  const responseJson = await response.json();
  return responseJson


}

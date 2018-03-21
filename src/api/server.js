import axios from 'axios';
import qs from 'qs';
/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 * 注意：params中的数据会覆盖method url 参数，所以如果指定了这2个参数则不需要在params中带入
*/
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}


const debug = process.env.NODE_ENV !== 'production';
let url = GetQueryString('url');

if ( !debug ) {
    let setUrl;
    if(url) {
        setUrl = url
    } else {
        setUrl = '/'
    }
    axios.defaults.baseURL = setUrl

} else {
    axios.defaults.baseURL = '/'
}
// axios.interceptors.request.use((config) => {
//     config.headers.common['fu-access-token'] = 'abf5e723-9746-4ed3-b4c9-61122ba70468'
//     return config
// })


export default class Server {
  axios(method, url, data){
    return new Promise((resolve, reject) => {
      if(typeof data !== 'object') data = '';

      // 过滤 空属性
      for (let key in data) {
        if (data[key] == "") {
          delete data[key]
        } 
      }

      let _option = {
        method,
        url,
        baseURL: axios.defaults.baseURL,
        timeout: 30000,
        params: null,
        data: qs.stringify(data),
        headers: null,
        withCredentials: true, //是否携带cookies发起请求
      }
      axios.request(_option).then(res => {
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
      },error => {
        if(error.response){
            reject(error.response.data)
        }else{
            reject(error)
        }
      })
    })
  }
}

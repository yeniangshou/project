import axios from 'axios'
import vue from 'vue'
// import qs from 'qs'

console.log('process.env', process.env) 

const instance = axios.create({
    // 这个是接口开发环境还是生产环境的配置地址
    // baseURL: process.env.NODE_ENV == 'development'?'http://image.baidu.com/' : 'http://image.baidu.prod.com/',
    timeout: 10000,
    // transformRequest: data => qs.stringify(data)
});

// 存储所有的请求标致和拒绝请求的方法
let  pending =[];
// 这个是控制取消请求的
let cancelToken = axios.CancelToken
// 检查且删掉同样的请求
let removePending = config => {
    for(let p in pending){
        if(pending[p].u === config.url+'&'+config.method){
            // 当前请求在数组中存在时，执行函数体
            pending[p].f(); // 执行取消操作 
            pending.splice(p, 1); // 把这条记录从数组中移除
        }
    }
}

// 请求拦截器
instance.interceptors.request.use(function (config) {
    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken( c=>{
        pending.push({u: config.url+'&'+config.method, f:c})
    })
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
   // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中删除
    removePending(response.config);
    return response;
}, function (error) {

    vue.prototype.$loading().close();
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 最后输出axios,准备将其放入vue的原型中
export default instance;
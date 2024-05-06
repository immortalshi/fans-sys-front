import axios from  'axios'
import { baseURL_dev } from '../config/baseURL.ts';

const instance = axios.create({
    baseURL: baseURL_dev,
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  // 添加请求拦截器
  instance.interceptors.request.use(
  function (config) {
      // 在发送请求之前做些什么
      const whiteList:Array<string | undefined> = ['login', 'reguser']
      if(!whiteList.includes(config.url)) {
        config.headers.Authorization = sessionStorage.getItem('token')
      }

      return config;
  },
  function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
      // 对响应数据做点什么
      return response;
  },
  function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
  }
);

  export const $get = async (url:string, params:object={}) => {
    let {data} = await instance.get(url, {params})
    return data
  }

  export const $post = async (url:string, params:object={}) => {
    let {data} = await instance.post(url, params)
    return data
  }
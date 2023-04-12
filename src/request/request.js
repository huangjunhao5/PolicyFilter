import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 接口的基础路径
    timeout: 5000, // 请求超时时间
    headers: {
        'Content-Type': '*/*',
        'Access-Control-Allow-Origin': '*',
        // 'Authorization': 'Bearer ' + localStorage.getItem('token'), // 示例：设置带有 Token 的请求头
        // 'Content-Type': 'application/x-www-form-urlencoded',
    }
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在请求发送之前做一些处理，如加入token等
        // const domain = window.location.hostname;
        // // 设置请求头
        // config.headers['Origin'] = domain;
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return config
    },
    error => {
        // 请求错误时做些事
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 数据响应之后，可以做一些响应处理，如判断返回的状态码等
        return response.data
    },
    error => {
        // 响应错误时做些事
        console.log(error)
        return Promise.reject(error)
    }
)

export default service

export const success = 1;

export const failed = 0;

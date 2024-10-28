import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3500/api', //後端API的URL,上架時要改
});

//檢查是否登入
//因為登入和註冊路由不需要攜帶jwt，所以將他們排除
const whitelist = ['/auth/login', '/auth/register'];
// 使用request攔截器(interceptor)為每個request 加上 token
api.interceptors.request.use((config) => {

    if (!whitelist.includes(config.url)) {
        // 從 localStorage 中獲取使用者資訊
        const user = JSON.parse(localStorage.getItem('user'));
        // 使用 && 運算符，檢查 user 和 user.data 是否存在
        const token = user && user.data && user.data.token;
        // 如果 token 存在，
        // 則將他加到到request header的 Authorization 屬性中
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
    }
    // 回傳更新後的配置
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
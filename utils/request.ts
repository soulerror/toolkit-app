import Axios from 'axios'
import { message } from 'ant-design-vue';

const instance = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10 * 1000,
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(config => {
    return config;
}, (err: Error) => {
    console.log(err)
})

// 响应拦截器
instance.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    if (code != 200) {
        message.error(res.data.message)
        return Promise.reject(res.data.message)
    } else {
        // 设置Token
        if (code === 200 && (res.config.url === '/user/login')) {
            // setToken(res.data.data)
        }
        return Promise.resolve(res.data)
    }
},
    error => {
        if (error.toString().indexOf('401') > 0) {
            location.href = '/login'
            return
        }
        return Promise.reject(error)
    }
)


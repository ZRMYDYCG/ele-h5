import axios from 'axios'
import { showDialog } from 'vant';

const instance = axios.create({
    baseURL: '/api'
})

instance.interceptors.response.use((response) => {
    const { data: _data } = response
    const { data, code, msg } = _data
    // 后端规定: 状态码不为 0 的时候, 就请求失败了
    if(code !== 0) {
        showDialog({
            message: msg
          }).then(() => {
            // 关闭弹窗的逻辑
        })
        return Promise.reject(msg)
    }
    return data
})

export default instance
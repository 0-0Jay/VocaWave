import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'http://192.168.35.243:8099/',
    baseURL: 'http://172.26.13.211:8099/',
    withCredentials: true,
})

export default axiosInstance;
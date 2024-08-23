import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://192.168.35.243:8099/',
    withCredentials: true,
})

export default axiosInstance;
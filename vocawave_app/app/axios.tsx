import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: '로컬호스트 포트 입력',
    baseURL: '로컬호스트 포트 입력',
    withCredentials: true,
})

export default axiosInstance;

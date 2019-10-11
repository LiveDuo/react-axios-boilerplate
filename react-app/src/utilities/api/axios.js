import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:  process.env.REACT_APP_AXIOS_ENDPOINT,
})

export { axiosInstance }
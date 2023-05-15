import axios from "axios";
import { useUserStore } from "@/store";



axios.defaults.withCredentials = true
axios.defaults.headers.post["Content-Type"] = 'application/json; charset=utf-8'

const TOKEN = 'TOKEN'
const instance = axios.create({
  baseURL: "/api",
  method: "post",
  // transformRequest: [
  //   (data, headers) => {
  //     return data;
  //   },
  // ],
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    let token = useUserStore().token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    let { headers, data } = response
    let { authorization } = headers
    // 把token保存起来
    if (authorization) {
      useUserStore().changeToken(authorization)
    }

    if (data.success) {
      return data.data
    } else {
      return Promise.reject(new Error(data.message))
    }
  },
  (error) => {
    let { status } = err.response
    if (status == 401) {
      window.location.href = '#/login'
    }
    return Promise.reject(error);
  }
);

export default instance

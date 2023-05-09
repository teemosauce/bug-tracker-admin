import axios from "axios";

axios.defaults.withCredentials = true 
axios.defaults.headers.post["Content-Type"] = 'application/json'
axios.defaults.headers.post["Content-Encoding"] = 'utf-8'

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  method: "post",
//   transformRequest: [
//     (data, headers) => {
//       return data;
//     },
//   ],
  timeout: 5000,
});

// instance.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default function request(data) {

};

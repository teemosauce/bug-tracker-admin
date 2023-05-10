import request from "@/utils/request.js";

export let login = ({ username, password }) => {
  return request.post('/user/login', {
    username,
    password,
  });
};


export let getInfo = (id) => {
  return request.get(`/user/info?id=${id}`, {
    id
  })
}

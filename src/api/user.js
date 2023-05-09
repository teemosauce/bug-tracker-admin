import request from "@/utils/request";

export let login = ({ username, password }) => {
  console.log(request.post)
  return request.post({
    url: '/login',
    // data: {
    //   username,
    //   password,
    // },
  });
};

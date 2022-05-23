import axios, { Method } from 'axios';

const URL = "https://studapi.teachmeskills.by/";

// const refreshToken = async (dispatch?: any) => {
//   const refresh = Storage.get("refresh", "");
//   const response = await axios.post(`${URL}auth/jwt/refresh`, { refresh });
//   dispatch(authActions.setAccess(response.data.access));
// }

const fetch = (method: Method) => async (uri: string, data?: any) => await axios({
  method,
  url: `${URL}${uri}`,
  data,
});

const api = {
  get: fetch("GET"),
  post: fetch("POST"),
}

export default api;


const axios = require("axios");
import config from "./config";
// require("dotenv").config();

const _axios = axios.create({ baseURL: config.baseURL });
// const _axios = axios.create({ baseURL: process.env.VUE_APP_BASE_API_URL });

export default {
  install(Vue) {
    const axiosMethods = {
      $get(path, args = {}) {
        return _axios
          .get(path, args)
          .then(({ data }) => {
            return data;
          })
          .catch((err) => {
            throw err;
          });
      },
      $post(path) {
        return _axios.post(path).then(({ data }) => data);
      },
    };
    Vue.prototype.$axios = axiosMethods;
  },
};

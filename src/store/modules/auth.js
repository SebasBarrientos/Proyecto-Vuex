import axios from "axios";

const API_URL = 'https://back-proyecto-vue.onrender.com/users'


export default {
    login(email, password) {
      const user = { email, password };
      return axios.post(API_URL + "/login", user);
    },
  };
import axios from "axios";

const instance = axios.create({
  baseURL: "https://vuejs-stock-trader-c0b8f.firebaseio.com/"
});

//instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-builder-7710a.firebaseio.com/",
});

export default instance;

import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-rep-1-e9a22.cloudfunctions.net/app",
});

export default instance;

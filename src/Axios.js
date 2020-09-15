import axios from "axios";
const instance = axios.create({
  // the api url of our cloud function
  baseURL: "http://localhost:5001/clone-a82e7/us-central1/api",
});

export default instance;

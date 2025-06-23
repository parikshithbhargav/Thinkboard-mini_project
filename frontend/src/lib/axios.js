import axios from "axios";

const api = axios.create({
  baseURL: "/api", // works with Vite proxy (dev) and relative URL (prod)
});

export default api;
